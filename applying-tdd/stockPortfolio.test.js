const StockPortfolio = require("./stockPortfolio");

test("creating a portfolio", () => {
  const portfolio = new StockPortfolio();

  expect(portfolio).toBeDefined();
});