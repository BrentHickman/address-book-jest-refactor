import AddressBook from './../src/addressbook.js';

describe('AddressBook', () => {

  test('should correctly create a Contact object with a contacts array and a starting id of 0', () => {
    const myAddressBook = new AddressBook("contact1", 0);
    expect(myAddressBook.contacts).toEqual("contact1");
    expect(myAddressBook.currentId).toEqual(0);
  });
});