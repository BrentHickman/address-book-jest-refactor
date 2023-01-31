import Contact from './../src/contact.js';

describe('Contact', () => {

  test('should correctly create a contact object with a name, address,phone number, work email and personal email', () => {
    const contact = new Contact("Name", "Address", "Phone#", "Work email", "Personal email");
    expect(contact.addressName).toEqual("Name");
    expect(contact.addressAddress).toEqual("Address");
    expect(contact.addressPhone).toEqual("Phone#");
    expect(contact.workEmail).toEqual("Work email");
    expect(contact.personalEmail).toEqual("Personal email");
  });
});