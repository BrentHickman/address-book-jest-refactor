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
});