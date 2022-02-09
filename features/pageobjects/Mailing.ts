class MailingInformation{
        get Address(){return $('//input[@name="address1"]')}
        get City(){return $('[name="city"]')}
        get State(){return $('//input[@name="state"]')}
        get PostalCode(){return $('[name="postalcode"]')}
        get country(){return $('//select[@name="country"]')}
        async asser(){
                await expect(this.Address).toBeExisting()
                await expect(this.City).toBeExisting()
                await expect(this.State).toBeExisting()
                await expect(this.PostalCode).toBeExisting()
                await expect(this.country).toBeExisting()
            }
        
        
}
export default new MailingInformation