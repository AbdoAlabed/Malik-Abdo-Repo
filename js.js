
// first
// the element with the tag name = 'img's attribute (src) will be changed to take new path.
$("img").attr("src","http://i.imgur.com/nWGCwiE.gif") 
// secound 
// once the button with the id go is clicked , the paragraph with the id output is changed to take the value from the input with the color id 
// and then applies red color effect on it 
$('button#go').on('click', function(){ $('p#output').text( $('input#color').val() ).css('color', 'red'); });
// THIRD
// once the button with the id beeperOne is clicked , an alert message will show up
$("button#beeperOne").click(function(){
	alert("you just clicked me.");


});
// forth
// it appends what ever you write to the element with tag name selected
$("div").append("Malik")
//fifth
//hides the selected element.
 $("div#secret").hide();
 //sixth
 //A. body is not in a string
 //C. the background-color is not in a string
 //$(body).css(background-color, 'green')
 //////////////////////////////////////////////////////
 //seventh
 // the selected tag name will take these css styling .
$("body").css("background-color",'red')
//eighth
//it appends what ever you write to the element with tag name selected
$("ol").append("<li>Here is thing four.</li>")
///// test