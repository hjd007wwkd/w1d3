function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var sales = {};
  for(var i = 0; i < salesData.length; i++){
    var totalSales = 0;
    var totalTaxes = 0;
    for(var ii = 0; ii < salesData[i].sales.length; ii++) {
      totalSales += salesData[i].sales[ii];
      totalTaxes += (salesData[i].sales[ii] * taxRates[salesData[i].province])
    }
    if(!sales[salesData[i].name]) {
      sales[salesData[i].name] = {totalSales: totalSales, totalTaxes: totalTaxes};
    } else {
      sales[salesData[i].name].totalSales += totalSales;
      sales[salesData[i].name].totalTaxes += totalTaxes;
    }
  }
  return sales;
}

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
