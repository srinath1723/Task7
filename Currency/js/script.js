  const API_URL="https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData=JSON.parse(this.responseText);
   
    const usdollar = countriesData.filter(country => {
        const currencies = country.currencies;
        if (currencies && currencies.USD) {
          return true;
        }
        return false;
      });
    
      
      usdollar.forEach(country => {
        
        console.log(`Countryname: ${country.name.common}`);
      });
}
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET",API_URL);
  req.send();