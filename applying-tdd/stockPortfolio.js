class StockPortfolio {
    constructor() { 
        this.stocks = {}; }
    isEmpty() { // if the list of ticker names currently stored is empty return true, otherwise false
        return Object.keys(this.stocks).length === 0; }

    // add a number of shares of a stock to the portfolio
    purchase(symbol, shares) { 
        if (this.stocks[symbol] === undefined) { // if the stock is not already in the portfolio
        this.stocks[symbol] = 0; } // set new stock to 0 shares

        this.stocks[symbol] = this.stocks[symbol] + shares; } // add # shares to existing stock

}

module.exports = StockPortfolio;