
/*Variables*/
var diapositiva =0;
var opitem = $("#SlidePaginacion li");
$(".btn-ingresar").click(function(){
	alert($(this).attr("producto"));
$
});

$("#SlidePaginacion li").click(function(){	
	diapositiva = $(this).attr("diap");
	$("#Diapositivas ul").animate({"left":diapositiva*-90+"vw"},1000);
	$("#SlidePaginacion li").removeClass('activo');
	$("#SlidePaginacion li").eq(diapositiva).addClass('activo');	
});
$(".controlIzq").click(function(){    
	if(diapositiva==0){diapositiva=3;}else{diapositiva--};  
		$("#Diapositivas ul").animate({"left":diapositiva*-90+"vw"},1000);	
		$("#SlidePaginacion li").removeClass('activo');
		$("#SlidePaginacion li").eq(diapositiva).addClass('activo');
		});
$(".controlDer").click(function(){
	console.log(diapositiva);
	if(diapositiva==3){diapositiva=0;}else{diapositiva++};  
		$("#Diapositivas ul").animate({"left":diapositiva*-90+"vw"},1000);
		$("#SlidePaginacion li").removeClass('activo');
		$("#SlidePaginacion li").eq(diapositiva).addClass('activo');
});
