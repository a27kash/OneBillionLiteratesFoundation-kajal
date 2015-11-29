<?php header('Access-Control-Allow-Origin: *'); ?>
<html>
    <head>
        <meta charset="utf-8" />
        <title>QuizApp</title>
        <link rel="stylesheet" href="../css/style.css" />
        
        <script src="../js/jquery-2.0.3.min.js"></script>
        <script src="../js/explore-url.js"></script>
      
        
    </head>
 
    <body>
        <div class="container">
            <h1 class="title">QuizApp</h1>
         </div>
		<script>
		jQuery.get('../html/data.txt', function(data) {
		var lines = data.split("\n");
        for (var i = 0, len = lines.length; i < len-1; i++) {
            alert(lines[i]);
        }
		});
</script>
</body>
</html>