const StockPortfolio = require("./stockPortfolio");

test("successfully creating a portfolio", () => {
  const portfolio = new StockPortfolio();

  expect(portfolio).toBeDefined();
});

test("new portfolio is empty", () => {
  const portfolio = new StockPortfolio();

  expect(portfolio.isEmpty()).toBe(true);
});

