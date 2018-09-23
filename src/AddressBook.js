class AddressBook {
    constructor() {
        
        this.contactList = [];
    }

    addContact(contact) {
        return this.contactList.push(contact);
    }

    checkContact(index) {
        return this.contactList[index];
    }

    deleteContact(index) {
        this.contactList.splice(index, 1);
    }
}