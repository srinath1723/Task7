## day 7 TASK

 1. Solving problems using array functions on rest countries data.
   
    1. Get all the countries from Asia continent/ region using filter method
    
       * Created html file and added script.js
  
       * In script.js added all the data from [restcountries](https://restcountries.com/v3.1/all) and displayed all countries and region of "Asia".
  
       * The code is in the [Asia region](./Asia%20region/js/script.js)folder
  
    **Discription**

       * Added a filter operation to the countriesData array to only include countries where the region property is equal to "Asia". 

       * we use for...in loop to iterate over the indices of the asianCountries array. 

    2. Get all the countries with population of less than 2 lakhs using filter method.
    
       * Created html file and added script.js
    
       * In script.js added all the data from [restcountries](https://restcountries.com/v3.1/all) and displayed all countries population less than 2 lakhs.

       * The code is in the [population](./population/js/script.js) folder

    **Discription**

       * Added a filter operation to the countriesData array to only include countries where the population  is  less than 2 lakhs.
  
       * we use for...in loop to iterate over the indices of the asianCountries array. 
  
    3. print following details name,capital,flag using forEach method
   
       * Created html file and added script.js
    
       * In script.js added all the data from [restcountries](https://restcountries.com/v3.1/all) and displayed all countries details name,capital,flag using forEach.
    
       * The code is in the [forEach](./ForEach/js/script.js) folder
  
    **Discription**

       * In this code, the forEach method is used to iterate over each country object in the countriesData array. 
   
       * For each country, the name `(country.name.common)`, capital `(country.capital)`, and flag`(country.flags.svg) `details are printed.

    4. print the total population of countries using reduce method

       * Created html file and added script.js
    
       * In script.js added all the data from [restcountries](https://restcountries.com/v3.1/all) and displayed total population of countries.
    
       * The code is in the [reduce method](./reduce%20method/js/script.js) folder
  
     **Discription**

       * In this code, the reduce method is used to iterate over each country object in the countriesData array and accumulate the population of each country. 
  
       * The initial value of the accumulator (total) is set to 0, and for each country, its population is added to the accumulator.

    5. print the country that uses US dollars as currency.
  
       * Created html file and added script.js
    
       * In script.js added all the data from [restcountries](https://restcountries.com/v3.1/all) and displayed all countries who uses US dollars as currency
    
       * The code is in the [currency](./Currency/js/script.js) folder
    **Discription**
   
       * The filter method is used to iterate over each country object in the countriesData array.

       * For each country, it checks if the currencies property exists and if it contains USD as a currency. If so, the country is included in the usdollar array.
