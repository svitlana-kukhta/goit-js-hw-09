'use strict'
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export let formData = {
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
  if (savedData) {formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;}};

loadFromLocalStorage();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (email === "" || message === "") { return console.log('Fill please all fields') };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = { email: "", message: "" };
  
});
