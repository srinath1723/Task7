const API_URL="https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData=JSON.parse(this.responseText);
    
   
   const ans=countriesData.filter(country=>country.population<200000
    );
   for (let i in ans) {
    console.log(`Countryname: ${ans[i].name.common} , population:${ans[i].population}`);
  }
}
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET",API_URL);
  req.send();