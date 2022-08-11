const adviceId = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");
const shuffleBtn = document.querySelector("#shuffle-btn");

const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.slip.id, data.slip.advice);
      adviceId.innerText = data.slip.id;
      advice.innerText = `"${data.slip.advice}"`;
    });
};

shuffleBtn.addEventListener("click", (e) => fetchAdvice());

fetchAdvice();
