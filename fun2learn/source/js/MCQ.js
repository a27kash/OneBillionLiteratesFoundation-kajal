var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0,questionGenerated,questiondata,questionkey,questionimg;
var studentProfile=["<br><table align=\"center\" id=\"resultTable\" style=border: 1px solid black;border-collapse: collapse;><caption><u><b>Incorrect Response Analysis</b></u></caption><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr>"]

function _(x){
	return document.getElementById(x);
}
function MCQQuestion(){
	test = _("test");
	test_table = _("test_table");
	console.log(pos+"\t"+questions.length);
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		
		test.innerHTML += "<label id=\"retryMessage\">Had Fun! Would Like to Try Again </label><a href=\"http://localhost/fun2learn/source/html/questions.php?topicId="+topicid+"&questionType="+questiontype+"\">Click Here</button>";
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
	var MCQarr=RandomMCQs(4,lines.length,arrq[pos]);
	console.log(question);
	questionkey=question[0];
	var questionhint=question[1];
	questionimg=question[2];
	
	
	
	shuffleMCQ(MCQarr);
	console.log(optionAlphabets);
	test.innerHTML = "<img src=../../resources/"+topicid+'/'+questionimg+"></img>";
	
	test.innerHTML += "<br><div id=\"questionGenerated\"><font size=\"10\">Identify the above picture ?</font></div></b><br>";
	var optionsvar=0;
	while(optionsvar<MCQarr.length){
	var strradio=lines[MCQarr[optionsvar]].split(";")[0];
	test.innerHTML += "<input type='radio' name='choices' value="+strradio+"><font size=\"6\"> "+strradio+"</font><br>";
	optionsvar++;
	}

	test.innerHTML += "<br/><button id=\"hint\" style=\"margin-left:20 px;\" onclick=\"hide('hint');show('hintText');\">Take a Hint</button>";
	
	test.innerHTML+="<div id=\"hintText\"  style=\"display:none;\"></div>";
	test.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;";
	hintText.innerHTML+="<div id=\"hintGenerated\"><font size=\"6\"> "+questionhint+"</font>";
	test.innerHTML += "<button onclick='checkMCQ()'>Submit Answer</button>";
}

function checkMCQ(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	console.log(choice+"\t"+questionkey);
	if(choice == questionkey){
		correct++;
	}
	else{
		studentProfile[studentProfile.length]="<tr><td><img src=../../resources/"+topicid+"/"+questionimg+"></img></td>"+"<td><font size=\"12\">"+choice+"</font></td>"+"<td><font size=\"12\">"+questionkey+"</font></td></tr>";
	}
	pos++;
	MCQQuestion();
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

function shuffleMCQ(array) {
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
var RandomMCQs=function (count,len,questionId){
	
			var arr = [questionId]
			while(arr.length < count){
			var randomnumber=Math.floor(Math.random()*len);
			var found=false;
			for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
			}
			if(!found){arr[arr.length]=randomnumber;
			
			}
			}
		return arr;
		}
				