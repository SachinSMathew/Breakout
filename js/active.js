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

// //======>  Mobile Menu Activation
// $('.main-navigation').meanmenu({
//     meanScreenWidth: "992",
//     meanMenuContainer: '.mobile-menu',
//     meanMenuClose: "<i class='icon icon-simple-remove'></i>",
//     meanMenuOpen: "<i class='icon icon-menu-34'></i>",
//     meanExpand: "",
// });
var fullNumber = 0
const initialNumber = number => {
    fullNumber = number;
    console.log(fullNumber)
}
const token = "a2064791-13b2-4e57-bf5f-c21d1147f4ac";
const sendMessage = event => {
	event.preventDefault();

	const message = {
		Number: fullNumber
	};
	smtpJS(message);
}
const smtpJS = async message => {
    document.getElementById('message').innerText = "Please wait.";
    if (message.Number !== "" || message.Number.includes([a-z])){
        try {
            console.log(message)
        await Email.send({
            SecureToken : token,
            To : "sachinsaji1999@gmail.com",
            From : "support@fundfolio.in",
            Subject : "Breakout leads",
            Body : `This person has a confusion on breakout: Number: ${message.Number}`
        }
        );
        document.getElementById('message').innerText = "Thank you! Your message is successfully sent :)";
        } catch (e) {
            document.getElementById('message').innerText = "Oops! Somthing went wrong :/";
            console.log(e)
    
        }
    }
    else{
        document.getElementById('message').innerText = "Please give your number";
    }
	document.getElementById('phone').value = '';
};