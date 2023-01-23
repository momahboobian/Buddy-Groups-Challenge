const boxEls = document.getElementById('learn-btn-1')
boxEls.addEventListener('click',function() {
  const div = document.querySelector(".box")
  div.classList.toggle("flip");

})


// function flip(box) {
  // const div = document.querySelector(".box")
  // div.classList.toggle("flip");
// console.log("hoy")
// }
// function flip(divId) {
//   const div = document.getElementById(divId);
//   div.classList.toggle("flip");
// }



// function flip(elem) {
//   elem.parentNode.parentNode.classList.toggle("flip");
//   console.log("hey")
// }

// document.getElementById('flip').addEventListener('click', function() {
//     card.classList.toggle('flipped');
// }, false);