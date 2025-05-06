# 💱 Currency Exchange Rate

A simple, clean, and responsive **Currency Converter** app built with vanilla JavaScript, HTML, and CSS. It fetches live exchange rates and allows users to convert between different currencies with dynamic country flags.

![GitHub repo size](https://img.shields.io/github/repo-size/AkashSingh062/CurrencyExchangeRate)
![GitHub issues](https://img.shields.io/github/issues/AkashSingh062/CurrencyExchangeRate)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AkashSingh062/CurrencyExchangeRate)

---

## 🚀 Features

- **Live Exchange Rates** using the Exchange Rate API.
- **Dynamic Dropdowns** with country codes and flags.
- **Real-time Conversion** with user input.
- **Responsive Design** optimized for all devices.
- **Clean UI** for a simple and intuitive experience.

---

## 🌐 Demo

[🔗 Live Demo](#) <!-- Add your deployment link here -->

---

## 📂 Project Structure

```bash
.
├── index.html          # Main HTML layout
├── style.css           # App styling & responsiveness
├── codes.js            # Country codes & mappings
└── main.js             # JavaScript logic for conversion & interactions

🛠️ Tech Stack
	•	HTML5
	•	CSS3
	•	JavaScript (Vanilla)
	•	ExchangeRate-API

⸻

⚙️ How It Works
	1.	Dropdown Initialization
	•	Populates From and To selectors with currency codes.
	•	Default: USD ➔ INR.
	2.	Flag Updates
	•	Flags update dynamically when a currency is selected.
	3.	Conversion
	•	User enters an amount and clicks Get Exchange Rate.
	•	Fetches real-time rates from the API.
	•	Displays the converted amount + exchange rate info.

🖥️ How to Run Locally
# 1️⃣ Clone the repository
git clone https://github.com/AkashSingh062/CurrencyExchangeRate

# 2️⃣ Navigate into the folder
cd CurrencyExchangeRate

# 3️⃣ Open index.html in your browser

💡 Improvements for the Future
	•	Add error handling for API failures.
	•	Include a loading spinner during fetch.
	•	Enable swapping currencies with one click.
	•	Store recent conversions in LocalStorage.
	•	Add dark mode 🌙.
