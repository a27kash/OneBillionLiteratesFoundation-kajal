<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE html>
<html>
<head>
<title>Fun2learn Student Quiz</title>
<meta charset="UTF-8">
		
        <script src="../js/jquery-2.0.3.min.js"></script>
        <script src="../js/explore-url.js"></script>
		<script src="../js/anagram.js"></script>
		<script src="../js/blanks.js"></script>
		<script src="../js/MCQ.js"></script>
		<link href="../css/style.css" rel="stylesheet">
		
<style>
div#test{ border:#000 1px solid; padding:10px 40px 40px 40px; }
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
div#test_table{
	align:center;
}
</style>
</head>
<body>

<div class="Homelink"><a  href="http://192.168.116.233/fun2learn/source/html/index.html">Return to Home</a></div>;
<h2 id="test_status"></h2>

<div id="test"></div>

<div id="test_table"></div>
<script type="text/javascript">
var questions = []
var arrq = []
var questiontype=getParameterByName("questionType");
var lines;
var topicid=getParameterByName("topicId");
		
		jQuery.get('data.txt', function(data) {
		lines = data.split("\n");
		var len = lines.length;
		if(len>0){
		
		
		console.log(questions);
        
		var uniqueRandomNumbers=function (count,len){
			var arr = []
			
			while(arr.length < count){
			var randomnumber=Math.floor(Math.random()*len);
			var found=false;
			for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
			}
			if(!found){arr[arr.length]=randomnumber;
			arrq[arrq.length]=randomnumber;
			questions[questions.length] =lines[randomnumber];
			}
			}
		}
		uniqueRandomNumbers(5,len);
		console.log("oppo"+questions.length+"...");
		if(questiontype=="fillblanks"){
		renderQuestion();
		}
		else if(questiontype=="anagrams"){
		anagramsQuestion();
		}
		else if(questiontype=="MCQ"){
		MCQQuestion();
		}
		//
		}
		});
		
		
	
</script>
</body>
</html>