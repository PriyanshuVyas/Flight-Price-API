const parseResponse = (res) => {
    const { carriers } = res.dictionaries;  

    const codesAndPrices = {};
    const parsedRes = {};
  
    res.data.forEach((d) => {
      d.itineraries.forEach((it) => {
        it.segments.forEach((seg) => {
            //Adding Airline codes and initialising empty array for prices
            codesAndPrices[seg.carrierCode] = [];
        });

        //Pushing the prices 
         Object.keys(carriers).forEach((i) =>
           codesAndPrices[i]?.push(`₹${(+d.price.grandTotal).toFixed()}`)
         );
      });
    });
  
    //Airline codes to airline names 
    Object.keys(codesAndPrices).forEach(
      (j) => (parsedRes[carriers[j]] = codesAndPrices[j])
    );

    return parsedRes;
  };
  
  export default parseResponse;