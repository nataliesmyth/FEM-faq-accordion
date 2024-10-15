const toggleBtns = document.querySelectorAll('.toggle-answer-icon');
const answers = document.querySelectorAll('.answer')
const answersArr = [ ...answers];

// attach a click event listener to each toggleBtn
// toggle hidden from the answer to the question the icon is attached to

function toggleAnswer() {
  let answer = this.parentElement.nextElementSibling;
  let img = this;
  img.classList.toggle('plus-icon');
  img.classList.toggle('minus-icon');
  answer.classList.toggle('hidden');
  // if (img.classList.contains('plus-icon')) {
  //   img.src='assets/images/icon-minus.svg'
  // }
}

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', toggleAnswer);
});