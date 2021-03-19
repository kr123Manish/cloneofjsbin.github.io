function update(){
	$("iframe").contents().find("html").
	html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style></head><body>"+$("#htmlpanel").val()+"</body></html");
	document.getElementById("Outputpanel").contentWindow.eval($("#JavaScriptpanel").val());

}



	$(".toggleButton").hover(function(){
	$(this).addClass("highlightcolor");
	},function(){
	$(this).removeClass("highlightcolor");	
		});

	$(".toggleButton").click(function(){
		$(this).toggleClass("active");
	var panelid=$(this).attr("id")+"panel";
	$("#"+ panelid).toggleClass("hidden");
		var activeclass = 4- $(".hidden").length;
		$(".panel").width(($(window).width()/activeclass) - 8);

		});
	$(".panel").height($(window).height()-$("#header").height()-12);
	 $(".panel").width(($(window).width() / 2) - 8);
	 update();
    $("textarea").on("change keyup paste", function () {
        update();	
    });





