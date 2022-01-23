const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});

// Email error message
const btnEmail = document.querySelector(".btn-email");
const errorMsg = document.querySelector(".error-msg");
const inputEmail = document.querySelector(".input-email");
let isRequired = value => value == "" ? false : true;
let isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

btnEmail.addEventListener("click", function(){
let valid = false;
const email = inputEmail.value.trim();
	if(!isRequired(email)){
		inputEmail.style.border = "2px solid white";
		errorMsg.style.display = 'block';
    inputEmail.style.opacity = "1";
		
	} else if (!isEmailValid(email)){
    errorMsg.textContent = "invalid"

  }
    else {
      errorMsg.textContent = "";
      valid = true;
    }

		return valid;
})