const randomAdviceUrl = 'https://api.adviceslip.com/advice';
const advice = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');
const button = document.getElementById('button');

getAdvice();

async function getAdvice() {
  const response = await fetch(randomAdviceUrl, {
    cache: "reload"
  });
  const data = await response.json();
  let adviceIdData = data.slip.id;
  let adviceData = data.slip.advice;
  updateAdviceId(adviceIdData, adviceData);
  console.log(data);
  console.log(adviceIdData);
}

function updateAdviceId(id, adviceData) {
  adviceId.innerText = ` #${id}`;
  advice.innerText = `"${adviceData}"`;
}

button.addEventListener('click', () => {
  adviceId.innerText = '';
  advice.innerText = 'Loading'
  setTimeout(getAdvice, 1000);
})