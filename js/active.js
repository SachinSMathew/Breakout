$('document').ready(function(){

     //======>  Pricing Toggle Functionality

    $("[class*='btn--toggle']").on('change',function(e){
        
        
        var getTarget = $(this).attr('data-tab-target'); 
        var inpSelect = $(this).children().children('input[type="checkbox"]');

        if($(inpSelect).is(':checked')){
            if($(getTarget).hasClass('monthly')){
                $(getTarget).removeClass('monthly');
                $(getTarget).addClass('yearly');
          
            }
        }else{
            // $(getTarget).removeClass('monthly');
            if($(getTarget).hasClass('yearly')){
                $(getTarget).removeClass('yearly');
                $(getTarget).addClass('monthly');
          
            }
        }      
    })

  
})

//======>  Mobile Menu Activation
$('.main-navigation').meanmenu({
    meanScreenWidth: "992",
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: "<i class='icon icon-simple-remove'></i>",
    meanMenuOpen: "<i class='icon icon-menu-34'></i>",
    meanExpand: "",
});

var card = $(".card");

$(document).on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/20;
  var ay = ($(window).innerHeight()/2- e.pageY)/10;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});