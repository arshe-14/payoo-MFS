let phoneNumber = document.getElementById("phoneNumber");
let pinNumber = document.getElementById("pinNumber");
let loginBtn = document.getElementById("loginBtn");
let errorMsg = document.getElementById("errorMsg");
let successMsg = document.getElementById("successMsg");

loginBtn.addEventListener("click", () => {
  let phone = phoneNumber.value;
  let pinValue = pinNumber.value;
  if (phone == "1234" && pinValue == 1234) {
    successMsg.removeAttribute("hidden");
  } else {
    errorMsg.removeAttribute("hidden");
  }
});
