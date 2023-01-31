import AddressBook from './../src/addressbook.js';

describe('AddressBook', () => {

  test('should correctly create a Contact object with a contacts array and a starting id of 0', () => {
    const myAddressBook = new AddressBook("contact1", 0);
    expect(myAddressBook.contacts).toEqual({contacts:"contact1"});
    expect(myAddressBook.currentId).toEqual(0);
  });

  test('should increase the id of the AddressBook object by one', () => {
    const myAddressBook = new AddressBook("contact1", 1);
    myAddressBook.assignId();
    expect(myAddressBook.contacts).toEqual({contacts:"contact1"});
    expect(myAddressBook.currentId).toEqual(2);
  });

  test('should add a Contact object to the AddressBook object', () => {
    const myAddressBook = new AddressBook();
    const myContact = {addressName:"Name",addressAddress:"Address", addressPhone:"Number",workEmail:"WorkEmail",personalEmail:"PersonalEmail"};
    myAddressBook.addContact(myContact);
    expect(myAddressBook.contacts).toEqual({contacts:{addressName:"Name",addressAddress:"Address", addressPhone:"Number",workEmail:"WorkEmail",personalEmail:"PersonalEmail"}});
    expect(myAddressBook.currentId).toEqual(0);
  });
});