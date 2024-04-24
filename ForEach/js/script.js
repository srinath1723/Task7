  const API_URL="https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData=JSON.parse(this.responseText);
    
    countriesData.forEach(country => {
        console.log("Country name:", country.name.common);
        
        console.log("Capital:",country.capital);
       
        console.log("Flag:", country.flags.svg);
       
        
      });
}
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET",API_URL);
  req.send();