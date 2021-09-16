

console.log("Thank you for your consideration for the Full Stack Web Developer position.  I look forward to hearing from the BizStream Team soon. -Aaron Beck");



$('#submit').click(function(){
    let _firstName = $('#firstName').val();
    let _lastName = $('#lastName').val();
    let _email = $('#email').val();
    let _message = $('#message').val();

    $.post('http://localhost:3000/contacts/', {
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        message: _message

    },function(response){
            console.log(response)
    })


})





