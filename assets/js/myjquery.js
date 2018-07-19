 $(document).ready(function(){
         	$('.thuonghieu li button').click(function(){
         		$('.thuonghieu li button').removeClass('active');
         		$(this).addClass('active');
         	})
         	$('.btnview').click(function(){
         		$('.btnview').removeClass('activebtn');
         		$(this).addClass('activebtn');
         	});


         	$('#btnlistView').click(function(){

         		 $(".figure_width").removeAttr("style");
         		 $(".img_width").removeAttr("style");
         		 $('#btnlistView').removeClass('figure_width');
         		  $('#btnlistView').removeClass('btngiohang');
         		 
 				$('.grid').find('figcaption').removeAttr("style");
         		  $(".figure_width").css({"padding": "10px", "width": "700px","height":"250px","float":"left","position":"relative"});
         		   $(".img_width").css({"width":"40%"});
         		 
         		  $('.grid').find('figcaption').addClass('grid_figcaption');
         		   $('#btnall').click();
         	})

         	$('#btngirdview').click(function(){

         		 $(".figure_width").removeAttr("style");
         		 $(".img_width").removeAttr("style");

         		  $(".figure_width").css({"padding": "10px","float":"left"});
         		   $(".img_width").css({"width":"250px","height":"250px"});
         		    $('.grid').find('figcaption').removeClass('grid_figcaption');
         		    $('#btnall').click();
         		    
         	})
})