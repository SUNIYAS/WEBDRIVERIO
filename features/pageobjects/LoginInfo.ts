import { isAssertionExpression } from "typescript"

class LoginInfo{
    get Username(){return $(()=>document.getElementById('email'))}
    get Password(){return $('//input[@name="password"]')}
    get ConfirmPassword(){return $('//input[@name="confirmPassword"]')}
    get submitbtn(){return $('[name="submit"]')}
    get signlink(){return $('=sign-in')}
    get loginname(){return $('//input[@name="userName"]')}
    get loginpassword(){return $('//input[@name="password"]')}
    get loginbutton(){return $('//input[@name="submit"]')}
    async asser(){
        await expect(this.Username).toBeExisting()
        await expect(this.Password).toBeExisting()
        await expect(this.ConfirmPassword).toBeChecked()
        await expect(this.submitbtn).toBeClickable()
        await expect(this.signlink).toBeClickable()
        await expect(this.loginname).toBeExisting()
        await expect(this.loginpassword).toBeChecked()
        await expect(this.loginbutton).toBeClickable()
    }
}

export default new LoginInfo