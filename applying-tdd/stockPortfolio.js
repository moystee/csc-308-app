class StockPortfolio {
    constructor() { this.stocks = {}; } // create an empty object to hold stocks

    isEmpty() { // if no stocks return true, otherwise false
        return Object.keys(this.stocks).length === 0; }

    // add a number of shares of a stock to the portfolio
    purchase(symbol, shares) { 
        if (this.stocks[symbol] === undefined) { // if the stock is not already in the portfolio
        this.stocks[symbol] = 0; } // set new stock to 0 shares

        this.stocks[symbol] = this.stocks[symbol] + shares; } // add # shares to existing stock

    // subtract a number of shares of a stock from the portfolio
    sell(symbol, shares) { 
        if (shares > this.number(symbol)) { // if requested shares > current shares, throw error
            throw new Error("Not possible to sell this number of shares."); }

        this.stocks[symbol] = this.stocks[symbol] - shares; // subtract # shares from existing stock
    
        // if no shares in stock, remove stock from portfolio
        if (this.stocks[symbol] === 0) {
            delete this.stocks[symbol]; } }

    unique() { // return unique stock symbols in the portfolio
        return Object.keys(this.stocks).length; }

    // return # shares of a stock in a portfolio
    number(symbol) {
        if (this.stocks[symbol] === undefined) { // if stock is non-existing return 0
            return 0; }

        return this.stocks[symbol]; } // if stock is existing return # shares
}

module.exports = StockPortfolio;