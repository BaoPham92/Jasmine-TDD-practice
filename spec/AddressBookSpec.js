describe('Address book', function() {
    let addressBook = new AddressBook(), newContact = new NewContact();

    beforeEach(function() {
        addressBook = new AddressBook(), newContact = new NewContact();
    })

    it('This should be able to add a contact.', function() {

        addressBook.addContact(newContact);

        expect(addressBook.checkContact(0)).toBe(newContact);
    })

    it('This should be able to delete a contact.', function() {

        addressBook.addContact(newContact);
        addressBook.deleteContact(0);

        expect(addressBook.checkContact(0)).not.toBeDefined();
    })

    describe('Async addressbook', function() {

        beforeEach(function (done) {
            addressBook.getInitialContacts(function () {
                done();
            });
        });

        it('This should return the initial list of contacts.', function (done) {

            expect(addressBook.initialContacts).toBe(true);
            done();
        })
    })
})