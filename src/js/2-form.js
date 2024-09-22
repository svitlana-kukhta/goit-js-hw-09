'use strict'
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export const formData = {
    email: "",
    message: ""
};
export const form = document.querySelector('.feedback-form');
export function saveToLocalStorage() {
localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
export function onInputChange(event) {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
};
form.addEventListener('input', onInputChange);
export function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
   if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
};
loadFromLocalStorage();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted with data:', formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = {email: "", message: ""
  };
});



//const registerForm = document.querySelector("form");
//registerForm.addEventListener("submit", handleSubmit);
//function handleSubmit(event) {
//    event.preventDefault();
 //   const form = event.target;
 //   const email = form.elements.email.value;
  //  const password = form.elements.password.value;
 //   if (email === "" || password === "") { return console.log('All form fields must be filled in') }
//console.log(`Email: ${email}, Password: ${password}`);
//form.reset();}