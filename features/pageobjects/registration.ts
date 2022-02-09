class Registration{
    get registerlink(){return $('=REGISTER')}
    get FirstName(){return $('//input[@name="firstName"]')}
    get LastName(){return $('[name="lastName"]')}
    get Phone(){return $('//input[@name="phone"]')}
    get Email(){return $(()=>document.getElementById('userName'))}
    async asser(){
        await expect(this.registerlink).toBeClickable()
        await expect(this.FirstName).toBeExisting()
        await expect(this.LastName).toBeExisting()
        await expect(this.Phone).toBeExisting()
        await expect(this.Email).toBeExisting()
    }


}

export default new Registration

