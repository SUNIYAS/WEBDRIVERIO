class LoginInfo{
    get Username(){return $(()=>document.getElementById('email'))}
    get Password(){return $('//input[@name="password"]')}
    get ConfirmPassword(){return $('//input[@name="confirmPassword"]')}
    get submitbtn(){return $('[name="submit"]')}
    get signlink(){return $('=sign-in')}
    get loginname(){return $('//input[@name="userName"]')}
    get loginpassword(){return $('//input[@name="password"]')}
    get loginbutton(){return $('//input[@name="submit"]')}
}
export default new LoginInfo