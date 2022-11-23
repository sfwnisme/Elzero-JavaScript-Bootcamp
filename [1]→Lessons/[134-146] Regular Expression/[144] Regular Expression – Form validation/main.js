document.getElementById("register").onsubmit = function () {
  let phone = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\) \d{3}-\d{4}/gi; // (1234) 567-8910
  let phoneNumberValidation = phoneRe.test(phone);
  // console.log(phoneNumberValidation)
  // return false;

  if (phoneNumberValidation === false) {
    console.log(false); // for testing
    return false;
  }
  return true;
};
