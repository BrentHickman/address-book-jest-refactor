let multEmails = new Email();

function Email(workEmail, personalEmail){
  this.workEmail = workEmail;
  this.personalEmail = personalEmail;
};

Email.prototype.addEmail = function(email){
  this.emails = email;
}