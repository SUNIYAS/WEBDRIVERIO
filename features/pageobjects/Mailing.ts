class MailingInformation{
        get Address(){return $('//input[@name="address1"]')}
        get City(){return $('[name="city"]')}
        get State(){return $('//input[@name="state"]')}
        get PostalCode(){return $('[name="postalcode"]')}
        get country(){return $('//select[@name="country"]')}
        
        
}
export default new MailingInformation