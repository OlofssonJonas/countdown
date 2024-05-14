const div = document.querySelector("div");
const h1 = document.querySelector("h1");
const date = document.querySelector("#date");
let countDown;

const storedDate = localStorage.getItem("datum");


if (storedDate) {
  date.value = storedDate;
  const countdownDate = new Date(storedDate).getTime();
  countDown = setInterval(() => {
    const now = new Date().getTime();
    let distance = countdownDate - now;
    if (distance > 0) {
      let day = Math.ceil(distance / (1000 * 60 * 60 * 24));
      day = day < 0 ? "0" + day : day;
      h1.innerHTML = day;
    } else {
      clearInterval(countDown);
      h1.innerHTML = "0";
    }
  }, 1000);
}

date.addEventListener("change", () => {
  clearInterval(countDown);
  const countdownDate = new Date(date.value).getTime();
  localStorage.setItem("datum", date.value);

  countDown = setInterval(() => {
    const now = new Date().getTime();
    let distance = countdownDate - now;
    if (distance > 0) {
      let day = Math.ceil(distance / (1000 * 60 * 60 * 24));
      day = day < 0 ? "0" + day : day;
      h1.innerHTML = day;
    } else {
      clearInterval(countDown);
      h1.innerHTML = "0";
    }
  }, 1000);
});
