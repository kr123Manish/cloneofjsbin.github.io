## <a href="https://kr123manish.github.io/cloneofjsbin.github.io/">Overview</a>
### Create a website using jQuery where we can run three languages 'HTML, CSS, Javascript' at realtime.
## <a href="https://kr123manish.github.io/cloneofjsbin.github.io/">Demo</a>
<img src="https://github.com/kr123Manish/cloneofjsbin.github.io/blob/main/demo.PNG"></img>
### Prerequisite
- HTML-5
- CSS
- Javascript
- jQuery
- Main Code
~~~ javascript
// used for execute commands in real time
function update(){  
	$("iframe").contents().find("html").
	html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style>
  </head><body>"+$("#htmlpanel").val()+"</body></html");
	document.getElementById("Outputpanel").contentWindow.eval($("#JavaScriptpanel").val());

}


// use togglebutton class for button effect which add or remove color during hover
	$(".toggleButton").hover(function(){
	$(this).addClass("highlightcolor");
	},function(){
	$(this).removeClass("highlightcolor");	
		});

// hide or display pannel on click of user
	$(".toggleButton").click(function(){
		$(this).toggleClass("active");
	var panelid=$(this).attr("id")+"panel";
	$("#"+ panelid).toggleClass("hidden");
  
  // adjust width of pannel according to user selected language
		var activeclass = 4- $(".hidden").length;
		$(".panel").width(($(window).width()/activeclass) - 8);

		});
	$(".panel").height($(window).height()-$("#header").height()-12);
	 $(".panel").width(($(window).width() / 2) - 8);
	 update();  // function call 
    $("textarea").on("change keyup paste", function () {
        update();	
    });
~~~
## <a href="https://kr123manish.github.io/cloneofjsbin.github.io/">Demo...</a>
### <a href="https://github.com/kr123Manish/cloneofjsbin.github.io">Get source code :books: and images :camera:</a>
#### If you liked :smiley: it don't forget to :star: it. 
