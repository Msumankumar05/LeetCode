/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pricemin = Infinity;
    let pricemax = 0;  

     for (let price of prices) {
        
        pricemin = Math.min(pricemin, price);

       
        pricemax = Math.max(pricemax, price - pricemin);
    }

    return pricemax;
};