var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0,questionGenerated,questiondata,questionkey,questionimg;
var studentProfile=["<br><table align=\"center\" id=\"resultTable\" style=border: 1px solid black;border-collapse: collapse;><caption><u><b>Incorrect Response Analysis</b></u></caption><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr>"]

function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	test_table = _("test_table");
	console.log(pos+"\t"+questions.length);
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		
		test.innerHTML += "<label id=\"retryMessage\">Had Fun! Would Like to Try Again </label><a href=\"http://localhost/fun2learn/source/html/questions.php?topicId="+topicid+"\">Click Here</button>";
		_("test_status").innerHTML = "Test Completed";
		
		//Creating inner HTML for score table
		studentProfile[studentProfile]="</table>";
		test_table.innerHTML+=studentProfile.join('');
		
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos].split(";");
	console.log(question);
	questionkey=question[0];
	var questionhint=question[1];
	questionimg=question[2];
	
	questiondata=Math.floor(Math.random()*questionkey.length);
	
	console.log(questiondata);
	questionGenerated=replaceAt(questionkey,questiondata,'_');
	var indexBlank = (questionkey.toUpperCase()).charCodeAt(questiondata) - 65;
	question[question.length]=questionkey[questiondata];
	var optionAlphabets=uniqueAlphabets(5,indexBlank);
	shuffleArray(optionAlphabets);
	console.log(optionAlphabets);
	test.innerHTML = "<img src=../../resources/"+topicid+'/'+questionimg+"></img>";
	
	test.innerHTML += "<br><div id=\"questionGenerated\"><font size=\"12\"> "+questionGenerated+"</font></div></b><br>";
	var optionsvar=0;
	while(optionsvar<optionAlphabets.length){
	var strradio=String.fromCharCode(optionAlphabets[optionsvar]+65).toLowerCase();
	test.innerHTML += "<input type='radio' onchange='changeButton()' name='choices' value="+strradio+"><font size=\"6\"> "+strradio+"</font><br>";
	optionsvar++;
	}

	test.innerHTML += "<br/><button id=\"hint\" style=\"margin-left:20 px;\" onclick=\"hide('hint');show('hintText');\">Take a Hint</button>";
	
	test.innerHTML+="<div id=\"hintText\"  style=\"display:none;\"></div>";
	
	hintText.innerHTML+="<div id=\"hintGenerated\"><font size=\"6\"> "+questionhint+"</font>";
	test.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function changeButton() {
	var replacedword=replaceAt(questionkey,questiondata,$("input[name='choices']:checked").val());
	document.getElementById("questionGenerated").innerHTML="<div id=\"questionGenerated\"><font size=\"12\"> "+questionkey.substring(0, questiondata)+"</font><font size=\"12\" color=\"red\">"+$("input[name='choices']:checked").val()+"</font><font size=\"12\">"+questionkey.substring(questiondata + 1)+"</font></div></b>";
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	console.log(choice+"\t"+question[question.length-1]);
	if(choice == question[question.length-1]){
		correct++;
	}
	else{
		studentProfile[studentProfile.length]="<tr><td><img src=../../resources/"+topicid+"/"+questionimg+"></img></td><td>"+document.getElementById("questionGenerated").innerHTML+"</td><td><font size=\"12\">"+questionkey+"</font></td></tr>";
	}
	pos++;
	renderQuestion();
}


function replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
}

function uniqueAlphabets(count,indexBlank){
			var arr = [indexBlank]
			while(arr.length+1 <=count){
			var randomnumber=Math.floor(Math.random()*26);
			var found=false;
			for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
			}
			if(!found)arr[arr.length]=randomnumber;
			}
			return arr;
		}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function show(elementId) {
document.getElementById(elementId).style.display="block";
}
  function hide(elementId) {
document.getElementById(elementId).style.display="none";
}