class Registration{
    get registerlink(){return $('=REGISTER')}
    get FirstName(){return $('//input[@name="firstName"]')}
    get LastName(){return $('[name="lastName"]')}
    get Phone(){return $('//input[@name="phone"]')}
    get Email(){return $(()=>document.getElementById('userName'))}
}

export default new Registration

