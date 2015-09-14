$(document).ready(function(){ 

/* Click right answer*/ 
	$('#mariana, #southafrica, #vaticancity, #colombo, #copenhagen, #bering, #canberra, #florida, #bern, #K2').click(function(){
		$(this).toggleClass('correct');
		$('.niceJob').show();
    $('.correct').show();
    $('#next1').show();
		$('.sorry').hide();
	})

  $('#southafrica').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next2').show();
    $('.sorry').hide();
  })

  $('#vaticancity').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next3').show();
    $('.sorry').hide();
  })
  
  $('#colombo').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next4').show();
    $('.sorry').hide();
  })

  $('#copenhagen').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next5').show();
    $('.sorry').hide();
  })

  $('#bering').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next6').show();
    $('.sorry').hide();
  })

  $('#canberra').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next7').show();
    $('.sorry').hide();
  })

  $('#florida').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next8').show();
    $('.sorry').hide();
  }) 

$('#bern').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next9').show();
    $('.sorry').hide();
  })

$('#K2').click(function(){
    $(this).toggleClass('correct');
    $('.niceJob').show();
    $('.correct').show();
    $('#next10').show();
    $('.sorry').hide();
  })






/* Your wrong answer turns red and say, "Wrong! Try again" */ 
	$('#tonga, #phillipine, #puertorico').click(function(){
		$(this).toggleClass('wrong');
		$('.sorry').show();
		$('.niceJob').hide();
    $('#next1').hide();
  
	})

$('#bolivia, #israel, #russia').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next2').hide();

})

$('#monaco, #sanmarino, #malta').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next3').hide();

})

$('#suva, #jakarta, #dhaka').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next4').hide();

})
 $('#reykjavik, #edinburgh, #helsinki').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next5').hide();

 })

 $('#kara, #okhotsk, #eastsiberian').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next6').hide();

 })

 $('#sydney, #wellington, #melbourne').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next7').hide();
 })

 $('#wyoming, .newyork, #california, #zurich').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next8').hide();
 })

 $('#zurich, #geneva, #basel').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next9').hide();
 })

$('#everest, #denali, #montblanc').click(function(){
  $(this).toggleClass('wrong');
  $('.sorry').show();
  $('.niceJob').hide();
  $('#next10').hide();
 })







/* Start quiz button brings you to 1st question */
    $('.button').click(function(){
    	$('.instructions').hide();
    	$('.question1').show();
    }  );

/*Next button*/
    $('#next1').click(function(){
      $('.question1').hide();
      $('.question2').show();
      $('.niceJob').hide();
    });


  $('#next2').click(function(){
      $('.question2').hide();
      $('.question3').show();
      $('.niceJob').hide();
    });


  $('#next3').click(function(){
      $('.question3').hide();
      $('.question4').show();
      $('.niceJob').hide();
    });


  $('#next4').click(function(){
      $('.question4').hide();
      $('.question5').show();
      $('.niceJob').hide();
    });

  $('#next5').click(function(){
      $('.question5').hide();
      $('.question6').show();
      $('.niceJob').hide();
    });

  $('#next6').click(function(){
      $('.question6').hide();
      $('.question7').show();
      $('.niceJob').hide();
    });

  $('#next7').click(function(){
      $('.question7').hide();
      $('.question8').show();
      $('.niceJob').hide();
    });

  $('#next8').click(function(){
      $('.question8').hide();
      $('.question9').show();
      $('.niceJob').hide();
    });

  $('#next9').click(function(){
      $('.question9').hide();
      $('.question10').show();
      $('.niceJob').hide();
    });

  $('#next10').click(function(){
      $('.question10').hide();
      $('.finish').show();
      $('.niceJob').hide();
      $('#replay').show();
    });


  



/* Reload page */
$('#replay').click(function(){
  location.reload();
});


});


