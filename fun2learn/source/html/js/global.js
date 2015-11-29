 var qCounter = 0;
// DOM Ready =============================================================
$(document).ready(function() {

	renderTopics();
	$("#teacher").on('click', function(){
		var password;

		var pass1="teacher";

		password=prompt('Please enter your password to view this page!','');

		if (password==pass1){
			window.location="teacher.html";
		}
		else
		{
			window.location="index.html";
			$('#loginMessage').append('Password Incorrect!');
		}
	});

	$("#logout").on('click', function(){

		$('#loginMessage').append('Logged Out!');
		window.location="index.html";
	});

});

// Functions =============================================================

function renderTopics(){
  $.get( "http://192.168.116.233/fun2learn/source/html/indexReader.php", function(data) {
})
  .done(function(data) {
       
	var ks = data.split("\n");
           $.each(ks, function(key, value){
           	if(value=="") return false;
              var Content1 = '<div class="col-sm-4 portfolio-item">';
              Content1 += '<a href="#portfolioModal'+(key+1)+'" class="portfolio-link" data-toggle="modal">';
              Content1 += '<div class="caption">';
              Content1 += '<div class="caption-content">';
              Content1 += '<i class="fa fa-search-plus fa-3x"></i>';
              Content1 += '</div></div>';
              Content1 += '<img src="http://192.168.116.233/fun2learn/resources/thumbnails/thumbnail'+(key+1)+'.png" class="img-responsive" alt="">';
              Content1 += '<span class="text-content"><span>'+value+'</span></span>';
              Content1 += '</a></div>';
              $("#show_topics").append(Content1);

              var Content ='<div class="portfolio-modal modal fade" id="portfolioModal'+(key+1)+'" tabindex="-1" role="dialog" aria-hidden="true">';
              Content +='<div class="modal-content">';
              Content +='<div class="close-modal" data-dismiss="modal">';
              Content +='<div class="lr">';
              Content +='<div class="rl">';
              Content +='</div></div></div>';
              Content +='<div class="container">';
              Content +='<div class="row">';
              Content +='<div class="col-lg-8 col-lg-offset-2">';
              Content +='<div class="modal-body">';
              Content +='<h2>'+value+' Lessons</h2>';
              Content +='<hr class="star-primary">';
              Content +='<img src="http://192.168.116.233/fun2learn/resources/thumbnails/thumbnail'+(key+1)+'.png" class="img-responsive img-centered" alt="">';
              Content +='<a href="http://192.168.116.233/fun2learn/source/html/questions.php?topicId='+value+'&questionType=MCQ
">';
              Content +='<button type="button" class="btn btn-success btn-lg">Multiple Choice Questions</button>';
              Content +='</a> <tr/> <tr/><tr/> <tr/><tr/> <tr/>';
              Content +='<a href="http://192.168.116.233/fun2learn/source/html/questions.php?topicId='+value+'&questionType=matching">';
              Content +='<button type="button" class="btn btn-success btn-lg">Match The Following</button>';
              Content +='</a> <br/> <br/>';
              Content +='<a href="http://192.168.116.233/fun2learn/source/html/questions.php?topicId='+value+'&questionType=anagrams">';
              Content +='<button type="button" class="btn btn-success btn-lg">Anagrams</button>';
              Content +='</a> <tr/> <tr/> <tr/> <tr/><tr/> <tr/>';
              Content +='<a href="http://192.168.116.233/fun2learn/source/html/questions.php?topicId='+value+'&questionType=fillblanks">';
              Content +='<button type="button" class="btn btn-success btn-lg">Fill in the Blanks</button>';
              Content +='</a> <br/> <br/> <br/>';
              Content +='<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>';
              $("#index_test").append(Content);

              var Content2 = '<div class="col-sm-4 portfolio-item">';
              Content2 += '<a href="#portfolioModal'+(key+1)+'" class="portfolio-link" data-toggle="modal">';
              Content2 += '<div class="caption">';
              Content2 += '<div class="caption-content">';
              Content2 += '<i class="fa fa-search-plus fa-3x"></i>';
              Content2 += '</div></div>';
              Content2 += '<img src="http://192.168.116.233/fun2learn/resources/thumbnails/thumbnail'+(key+1)+'.png" class="img-responsive" alt="">';
              Content2 += '</a></div>';
              $("#renderUpdate").append(Content2);

              var Content3 ='<div class="portfolio-modal modal fade" id="portfolioModal'+(key+1)+'" tabindex="-1" role="dialog" aria-hidden="true">';
              Content3 +='<div class="modal-content">';
              Content3 +='<div class="close-modal" data-dismiss="modal">';
              Content3 +='<div class="lr">';
              Content3 +='<div class="rl">';
              Content3 +='</div></div></div>';
              Content3 +='<div class="container">';
              Content3 +='<div class="row">';
              Content3 +='<div class="col-lg-8 col-lg-offset-2">';
              Content3 +='<div class="modal-body">';
              Content3 +='<h2>'+value+' Lessons</h2>';
              Content3 +='<hr class="star-primary">';
              Content3 +='<img src="http://192.168.116.233/fun2learn/resources/thumbnails/thumbnail'+(key+1)+'.png" class="img-responsive img-centered" alt="">';
              Content3 +='<p>Edit The Topic</p>';
              Content3 +='<ul class="list-inline item-details">';
              Content3 +='<li>Edit Topic:';
              Content3 +='<strong><a href="index.html">'+value+' Lesson</a>';
              Content3 +='</strong></li>';
              Content3 +='<li>Create Test Pattern:';
              Content3 +='<strong><a href="index.html">New</a>';
              Content3 +='</strong></li>';
              Content3 +='<li>All Tests:';
              Content3 +='<strong><a href="index.html">Open</a>';
              Content3 += '</strong></li></ul>'
              Content3 +='<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>';
              $("#updateTest").append(Content3);
           });
  })
  .fail(function (e){
    alert( "Error happened while Uploading Topics" );
  });
};

function readURL(input, parameter) {
	console.log(this);
	console.log(parameter);
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#parameter')
			.attr('src', e.target.result)
			.width(150)
			.height(200);
		};

		reader.readAsDataURL(input.files[0]);
	}
};

function addQuestion() {
	qCounter++;
	var Content = '<label> QUESTION'+ qCounter + '</label';

	Content += '<div class="row control-group">'
	Content += '<div class="form-group col-xs-12 floating-label-form-group controls">';
	Content += '<input type="text" class="form-control" placeholder="Text" name="text[]" id="text'+qCounter+'" required data-validation-required-message="Please enter your name.">';
	Content += '<p class="help-block text-danger"></p>';
	Content += '</div></div>';

	Content += '<br/><label for="image'+qCounter+'">Click to Select Image</label>';
	Content += '<div class="row control-group">'
	Content += '<div class="form-group col-xs-12 floating-label-form-group controls">';
	Content += '<input type="file" name="file[]" class="form-control" placeholder="Image" id="image'+qCounter+'" required data-validation-required-message="Please enter an image file.">';
	Content += '<p class="help-block text-danger"></p>';
	Content += '</div></div>';

	Content += '<div class="row control-group">'
	Content += '<div class="form-group col-xs-12 floating-label-form-group controls">';
	Content += '<input type="text" class="form-control" placeholder="Hint" name="hint[]" id="hint'+qCounter+'" required data-validation-required-message="Please enter a hint.">';
	Content += '<p class="help-block text-danger"></p>';
	Content += '</div></div>';

	$("#createtopic").append(Content);
	
};
