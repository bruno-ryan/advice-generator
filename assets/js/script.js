const randomAdviceUrl = 'https://api.adviceslip.com/advice';
const adviceElement = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');
const button = document.getElementById('button');

getAdvice();

async function getAdvice() {
  const response = await fetch(randomAdviceUrl, {
    cache: "no-cache"
  });
  const data = await response.json();
  let adviceIdData = data.slip.id;
  let adviceData = data.slip.advice;
  updateAdvice(adviceIdData, adviceData);
}

function updateAdvice(id, advice) {
  adviceId.innerText = ` #${id}`;
  adviceElement.innerText = `"${advice}"`;
}

button.addEventListener('click', getAdvice)