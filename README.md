Currency Exchange Rate

  A simple and interactive web app that allows users to convert currency values between different countries using real-time exchange rates.

🚀 Features
  	•	Live Exchange Rates: Fetches up-to-date exchange rates using the Exchange Rate API.
  	•	Dynamic Dropdowns: Populates currency selectors with country codes and updates the flag icons dynamically.
  	•	User Input: Allows users to input an amount and select source and target currencies.
  	•	Responsive Design: Clean, responsive UI styled with CSS for usability on various screen sizes.
  	•	Instant Conversion: Displays converted values and exchange rate details after clicking the button.

🛠️ Tech Stack
  	•	HTML5
  	•	CSS3
  	•	JavaScript (Vanilla)
  	•	ExchangeRate-API

 📂 File Structure

    ├── index.html         # The main HTML file setting up the UI.
    ├── style.css          # The stylesheet for app styling and layout.
    ├── codes.js           # Contains the country code data for dropdowns.
    ├── main.js            # JavaScript to fetch exchange rates and handle user interactions.

⚙️ How It Works
	1.	Dropdown Initialization:
  	•	Uses a list of country codes (countryList) to populate the “from” and “to” dropdown menus.
  	•	Sets default currencies (USD to INR).
	2.	Flag Update:
	  •	When a currency is selected, its corresponding flag image updates automatically.
	3.	Conversion Logic:
  	•	On clicking the Get Exchange Rate button:
  	•	Prevents default form submission.
  	•	Validates the amount (defaults to 1 if empty or zero).
  	•	Fetches exchange rates based on the selected base currency.
  	•	Calculates and displays the converted amount and the current exchange rate.

   📦 Setup & Run Locally
    	1.	Clone the repository:
         git clone https://github.com/AkashSingh062/CurrencyExchangeRate
      2.	Open the project folder.
	    3.	Run index.html in your browser.

🔍 Notes
	•	The app depends on the Exchange Rate API; ensure it’s available and not rate-limited.
	•	There’s minimal validation—consider adding more robust error handling for production.

💡 Possible Improvements
	•	Add error handling for API failures.
	•	Implement a loader/spinner during API fetch.
	•	Allow swapping currencies with a single button.
	•	Store recent conversions using LocalStorage.
