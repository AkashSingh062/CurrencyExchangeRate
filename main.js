const url = "https://api.exchangerate-api.com/v4/latest/USD";
const dropdowns = document.querySelectorAll(".dropdown select");

const updateExchangeRate = async () => {
  let amount = document.querySelector("input");
  let amtVal = amount.value;
  if (amtVal <= 0) {
    amount.value = "1";
    amtVal = 1;
  }
  const url = `https://api.exchangerate-api.com/v4/latest/${dropdowns[0].value}`;

  const rates = await fetch(url);
  const data = await rates.json();
  amount.value = (amtVal * data.rates[dropdowns[1].value]);
  document.querySelector(".msg").innerText = `1 ${dropdowns[0].value} = ${data.rates[dropdowns[1].value]} ${dropdowns[1].value}`;
  document.querySelector(".msg").style.display = "block";
};
const btn = document.querySelector(".btn");

for (let select of dropdowns) {
  for (let currency_code in countryList) {
    let option = document.createElement("option");
    option.value = currency_code;
    option.innerText = currency_code;
    if (select.name == "from" && currency_code == "USD") {
      option.selected = true;
    }
    if (select.name == "to" && currency_code == "INR") {
      option.selected = true;
    }
    select.appendChild(option);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (ele) => {
  let countryCode = countryList[ele.value];
  let img = ele.parentElement.querySelector("img").src = `https://flagsapi.com/${countryCode}/shiny/48.png`;
}
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  updateExchangeRate();

});

document.addEventListener("DOMContentLoaded", async () => {
  updateExchangeRate();
});
