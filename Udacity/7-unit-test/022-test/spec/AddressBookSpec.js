describe('Address Book', function() {
  let addressBook;
  let thisContact;

  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();

  });

  it('should be able to add contact', function() {
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete contact', function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  });

});

describe('Async Address Book', function() {
  let addressBook = new AddressBook();

  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      // this will signal to the framework that our asynchronous fn is done doing what we need it to do
      done();
    });
  })
  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    // this is indicating which of our test rely upon the asynchronous execution
    done();
  });
});
