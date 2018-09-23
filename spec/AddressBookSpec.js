describe('Address book', function(){
    it('This should be able to add a contact.', function() {
        let addressBook = new AddressBook(), newContact = new NewContact();

        addressBook.addContact(newContact);

        expect(addressBook.checkContact(0)).toBe(newContact);
    })
})