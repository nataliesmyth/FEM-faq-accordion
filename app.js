const toggleBtns = document.querySelectorAll('.toggle-answer-icon');
const answers = document.querySelectorAll('.answer')
console.log(answers)



toggleBtns.forEach((btn) => {
  btn.addEventListener('click', function() {
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.toggle('hidden')
    }
  });
});