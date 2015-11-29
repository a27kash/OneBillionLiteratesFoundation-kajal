<?php
if (isset($_POST['submit'])) {
$j = 0;     // Variable for indexing uploaded image.
     // Declaring Path for uploaded images.
$topic=$_POST['topic'];
if(is_dir("../../resources/".$topic)==false)
mkdir("../../resources/".$topic);

$topicfile = fopen("../../resources/".$topic."/".$topic.".txt", "w") or die("Unable to open file!");

$size=count($_POST['hint']);

$indexFile = "../../resources/"."index.txt";
$fh = fopen($indexFile, 'a') or die("can't open file");
$stringData = $topic;
fwrite($fh, $stringData."\n");
fclose($fh);


foreach($_POST['text'] as $key => $value) {
	
    echo $key, ' => ', $value, '<br />';
}
foreach($_POST['hint'] as $key => $value) {
	
    echo $key, ' => ', $value, '<br />';
}

for ($i = 0; $i < count($_FILES['file']['name']); $i++) {
// Loop to get individual element from the array
$validextensions = array("jpeg", "jpg", "png");      // Extensions which are allowed.
echo $_FILES['file']['name'][$i];
$ext = explode('.', basename($_FILES['file']['name'][$i]));   // Explode file name from dot(.)
$file_extension = end($ext); // Store extensions in the variable.
$target_path = "../../resources/".$topic."/";
$target_path = $target_path . $_POST['topic'].($i+1) . "." . $ext[count($ext) - 1];     // Set the target path with a new name of image.
if($i<$size)
fwrite($topicfile,$_POST['text'][$i].";".$_POST['hint'][$i].";".$_POST['topic'].($i+1) . "." . $ext[count($ext) - 1]."\n");
$j = $j + 1;      // Increment the number of uploaded images according to the files in array.
if (($_FILES["file"]["size"][$i] < 2000000)     // Approx. 100kb files can be uploaded.
&& in_array($file_extension, $validextensions)) {
if (move_uploaded_file($_FILES['file']['tmp_name'][$i], $target_path)) {
// If file moved to uploads folder.
echo $j. ').<span id="noerror">Image uploaded successfully!.</span><br/><br/>';
} else {     //  If File Was Not Moved.
echo $j. ').<span id="error">please try again!.</span><br/><br/>';
}
} else {     //   If File Size And File Type Was Incorrect.
echo $j. ').<span id="error">***Invalid file Size or Type***</span><br/><br/>';
}
}
fclose($topicfile);
header('Location: ../html/teacher.html#topics');    
}
?>