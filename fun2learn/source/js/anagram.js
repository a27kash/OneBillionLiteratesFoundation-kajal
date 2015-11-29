
var pos = 0, test,prevAnswer, test_status, question, choice, choices, chA, chB, chC, correct = 0,optionAlphabets,questionGenerated,questiondata,questionkey,questionimg;
var studentProfile=["<br><table align=\"center\" id=\"resultTable\" style=border: 1px solid black;border-collapse: collapse;><caption><u><b>Incorrect Response Analysis</b></u></caption><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr>"]

function _(x){
	return document.getElementById(x);
}

function anagramsQuestion(){
	
	test = _("test");
	test_table = _("test_table");
	console.log(pos+"\t"+questions.length);
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		
		test.innerHTML += "<label id=\"retryMessage\">Had Fun! Would Like to Try Again </label><a href=\"http://192.168.116.233/fun2learn/source/html/questions.php?topicId="+topicid+"&questionType="+questiontype+"\">Click Here</button>";
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
	
	
	question[question.length]=questionkey[questiondata];
	
	optionAlphabets=questionkey.split("");
	optionAlphabets=randomArray(optionAlphabets,questionkey);
	
	
	test.innerHTML = "<img src=../../resources/"+topicid+'/'+questionimg+"></img>";
	
	test.innerHTML += "<br><div id=\"questionGenerated\"><font size=\"12\"> "+optionAlphabets+"</font></div></b><br>";
	test.innerHTML += "<br><input type=\"text\" id=\"AnswerText\" onkeyup=\"xyz();\"style=height:40px;font-size: 44px;\"><br>";
	
	

	test.innerHTML += "<br/><button id=\"hint\" style=\"margin-left:20 px;\" onclick=\"hide('hint');show('hintText'); \">Take a Hint</button>";
	test.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;";
	test.innerHTML+="<div id=\"hintText\"  style=\"display:none;\"></div>";
	hintText.innerHTML+="<div id=\"hintGenerated\"><font size=\"6\"> "+questionhint+"</font>";
	test.innerHTML += "<button onclick='checkAnagram()'>Submit Answer</button>";
}

function xyz()
{
	if($("#AnswerText").val().split("").length>=0){
	console.log("key2up"+document.getElementById("questionGenerated").innerHTML);
	
	var replacedvar=0;
	var typedarr=[]
	var replacedarr=$("#AnswerText").val().split("");
	var optionAlphabetsarr=optionAlphabets.split("");
	console.log("........."+replacedarr);
	var optionAlphabetsvar=0;
	while(replacedvar<replacedarr.length){
		optionAlphabetsvar=0;
	
		while(optionAlphabetsvar<optionAlphabetsarr.length){
			console.log(replacedarr[replacedvar]+"\t"+optionAlphabetsarr[optionAlphabetsvar]+"\t"+$.inArray(optionAlphabetsvar, typedarr));
			if((replacedarr[replacedvar]==optionAlphabetsarr[optionAlphabetsvar])&&($.inArray(optionAlphabetsvar, typedarr)== -1)){
				typedarr[typedarr.length]=optionAlphabetsvar;
				break;
			}
			optionAlphabetsvar++;
		}
	replacedvar++;
	}
	document.getElementById("questionGenerated").innerHTML ="<div id=\"questionGenerated\">";
	optionAlphabetsvar=0;
	while(optionAlphabetsvar<optionAlphabetsarr.length){
	if(($.inArray(optionAlphabetsvar, typedarr)> -1)){
	document.getElementById("questionGenerated").innerHTML +="<font size=\"12\" color=\"red\">"+optionAlphabetsarr[optionAlphabetsvar]+"</font>";
	}
	else{
	document.getElementById("questionGenerated").innerHTML +="<font size=\"12\">"+optionAlphabetsarr[optionAlphabetsvar]+"</font>";
	}
	console.log("key1up"+document.getElementById("questionGenerated").innerHTML);
	optionAlphabetsvar++;
	}
	document.getElementById("questionGenerated").innerHTML +="</div>";
	}
	var prevAnswer=$("#AnswerText").val();
}
	

function checkAnagram(){
	choices = document.getElementsByName("choices");
	console.log("checkAnagram"+$("#AnswerText").val()+"\t"+question[question.length-1]);
	console.log(choice+"\t"+question[question.length-1]);
	if($("#AnswerText").val() == questionkey){
		correct++;
	}
	else{
		document.getElementById("questionGenerated").innerHTML="<div id=\"questionGenerated\"><font size=\"12\">"+$("#AnswerText").val() +"</font></div>";
		studentProfile[studentProfile.length]="<tr><td><img src=../../resources/"+topicid+"/"+questionimg+"></img></td><td>"+document.getElementById("questionGenerated").innerHTML+"</td><td><font size=\"12\">"+questionkey+"</font></td></tr>";
	}
	pos++;
	anagramsQuestion();
}


function replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
}

function uniqueAanagrams(count,indexBlank){
	
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

function randomArray(array,originalquestion) {
	var flag=0;
	while(((originalquestion == chararraytoString1(array))|| flag==0)){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	flag=1;
	}
	return chararraytoString1(array);
}

function chararraytoString1(arr1){
	
	var arrcount=0;
	var arrtemp='';
	console.log(arr1+"\t...."+arrtemp);
	while(arrcount<arr1.length){
		arrtemp += arr1[arrcount];
		arrcount++;
	}
	arr1=arrtemp;
	return arrtemp;
	
}
function show(elementId) {
document.getElementById(elementId).style.display="block";
}
  function hide(elementId) {
document.getElementById(elementId).style.display="none";
}