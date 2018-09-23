class AddressBook {
    constructor() {
        
        this.contactList = [];
        this.initialContacts = false;
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

    getInitialContacts(initial) {

        setTimeout(() => {

            this.initialContacts = true;

            if (initial) {
                return initial();
            }
        }, 5);
    }
}