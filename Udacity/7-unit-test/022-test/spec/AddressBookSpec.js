describe('Address Book', function() {
  it('should be able to add contact', function() {
    const addressBook = new AddressBook();
    const thisContact = new Contact();
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete contact', function() {
    const addressBook = new AddressBook();
    const thisContact = new Contact();
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
