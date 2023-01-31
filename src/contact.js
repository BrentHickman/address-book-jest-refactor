export default function Contact(addressName, addressAddress, addressPhone, workEmail, personalEmail){
  // let workEmail = document.getElementById("placeWorkEmailId").value;
  // let personalEmail = document.getElementById("placePersonalEmailId").value;
  this.addressName = addressName;
  this.addressAddress = addressAddress;
  this.addressPhone = addressPhone;
  this.email = new Email(workEmail, personalEmail);
}
