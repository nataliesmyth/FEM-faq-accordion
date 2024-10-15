const toggleBtns = document.querySelectorAll('.toggle-answer-icon');
const answers = document.querySelectorAll('.answer')
const answersArr = [ ...answers];
console.log(answersArr);

// attach a click event listener to each toggleBtn
// toggle hidden from the answer to the question the icon is attached to

function toggleAnswer() {
  console.log('toggleAnswer fired!!')
  console.log(this.parentElement.nextElementSibling)
  let answer = this.parentElement.nextElementSibling;
  answer.classList.toggle('hidden')
}

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', toggleAnswer);
});