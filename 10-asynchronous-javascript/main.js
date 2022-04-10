const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// First solution style proposed by MDN

/*

const animatePromise1 = alice1.animate(aliceTumbling, aliceTiming).finished;

animatePromise1.then(response => {
   const animatePromise2 = alice2.animate(aliceTumbling, aliceTiming).finished
   animatePromise2.then(response => {
      alice3.animate(aliceTumbling, aliceTiming);
   });
});

*/

// Second solution style proposed by MDN

/*

const animatePromise1 = alice1.animate(aliceTumbling, aliceTiming).finished;

animatePromise1.then(response => {
   return animatePromise2 = alice2.animate(aliceTumbling, aliceTiming).finished
})
.then(response => {
      alice3.animate(aliceTumbling, aliceTiming);
});

*/

// Third solution style proposed by MDN

async function orderedTumbling() {

   const response1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
   const response2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
   alice3.animate(aliceTumbling, aliceTiming);

}

orderedTumbling();