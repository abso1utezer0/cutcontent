$.get("/nav.html", function(data){
	$("#nav-placeholder").replaceWith(data);
});
$.get("/foot.html", function(data){
	$("#foot-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/malicious.html", function(data){
	$("#malicious-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/missing_images.html", function(data){
	$("#missing_images-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/nonstandard.html", function(data){
	$("#nonstandard-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/outside_links.html", function(data){
	$("#outside_links-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/plagurised.html", function(data){
	$("#plagurised-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/poorly_written.html", function(data){
	$("#poorly_written-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/satire.html", function(data){
	$("#satire-disclaimer-placeholder").replaceWith(data);
});
$.get("/articles/system/test/placeholder/disclaimers/stub.html", function(data){
	$("#stub-disclaimer-placeholder").replaceWith(data);
});
$.get("/audioimport.html", function(data){
	$("#audio-script-placeholder").replaceWith(data);
});