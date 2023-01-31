let myAddressBook = new AddressBook();

// let multEmails = new Email();

// function Email(workEmail, personalEmail){
//   this.workEmail = workEmail;
//   this.personalEmail = personalEmail;
// };

function Contact(addressName, addressAddress, addressPhone, workEmail, personalEmail){
  // let workEmail = document.getElementById("placeWorkEmailId").value;
  // let personalEmail = document.getElementById("placePersonalEmailId").value;
  this.addressName = addressName;
  this.addressAddress = addressAddress;
  this.addressPhone = addressPhone;
  this.email = new Email(workEmail, personalEmail);
}

// Email.prototype.addEmail = function(email){
//   this.emails = email;
// }

function AddressBook(){
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id){
  if (this.contacts[id] !== undefined){
      return this.contacts[id];
  }
  return false;
} 

AddressBook.prototype.deleteContact = function(id){
  if (this.contacts[id] === undefined){
      return false;
  }
  delete this.contacts[id];
  return true;
}