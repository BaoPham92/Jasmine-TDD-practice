describe('Address book', function(){
    it('This should be able to add a contact.', function() {
        let addressBook = new addressBook(), newContact = new newContact();

        addressBook.addContact(newContact);

        expect(addressBook.checkContact(0)).toBe(newContact);
    })
})