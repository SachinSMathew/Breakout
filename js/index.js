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

var fullNumber = 0
const initialNumber = number => {
    fullNumber = number;
}
const token = "a2064791-13b2-4e57-bf5f-c21d1147f4ac";
const sendMessage = event => {
    event.preventDefault();
    grecaptcha.execute();
	const message = {
		Number: fullNumber
    };
    //console.log(message)
	smtpJS(message);
}
const smtpJS = async message => {
    var regExp = /[a-zA-Z]/g;
    document.getElementById('message').innerText = "Please wait.";
    if (message.Number !== 0 && !regExp.test(message.Number)){
        try {
            console.log(message)
        await Email.send({
            SecureToken : token,
            To : "breakout@fundfolio.in",
            From : "support@fundfolio.in",
            Subject : `${message.Number}`,
            Body : `This person has a confusion on breakout: Number: ${message.Number}`
        }
        );
        document.getElementById('message').innerText = "Thank you! You'll receive a callback soon :)";
        } catch (e) {
            document.getElementById('message').innerText = "Oops! Something went wrong :/";
            console.log(e)
    
        }
    }
    else{
        document.getElementById('message').innerText = "Please give your number";
    }
	document.getElementById('phone').value = '';
};