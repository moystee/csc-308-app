const StockPortfolio = require("./stockPortfolio"); // import stockPortfolio.js

// 2.1

test("creating a portfolio", () => {
  const portfolio = new StockPortfolio();

  expect(portfolio).toBeDefined();
});

// 2.2

test("new portfolio is empty", () => {
  const portfolio = new StockPortfolio();

  expect(portfolio.isEmpty()).toBe(true);
});

// 2.3

test("purchase shares", () => {
  const portfolio = new StockPortfolio();

  portfolio.purchase("RBLX", 1);

  expect(portfolio.isEmpty()).toBe(false);
});

// 2.4

test("selling shares", () => {
  const portfolio = new StockPortfolio();

  portfolio.purchase("RBLX", 2);
  portfolio.sell("RBLX", 1);

  expect(portfolio.stocks.RBLX).toBe(1);
});

// 2.5

test("unique stock symbols", () => {
  const portfolio = new StockPortfolio();

  portfolio.purchase("RBLX", 5);
  portfolio.purchase("GMR", 10);

  expect(portfolio.unique()).toBe(2);
});

// 2.6

test("empty stock is removed", () => {
  const portfolio = new StockPortfolio();

  portfolio.purchase("RBLX", 1);
  portfolio.sell("RBLX", 1);

  expect(portfolio.unique()).toBe(0);
});

// 2.7

test("getting existing stock", () => {
  const portfolio = new StockPortfolio();

  portfolio.purchase("RBLX", 1);

  expect(portfolio.number("RBLX")).toBe(1);
});

test("getting non-existing stock", () => {
  const portfolio = new StockPortfolio();

  expect(portfolio.number("RBLX")).toBe(0);
});

// 2.8

test("the portfolio cannot sell more shares than it owns", () => {
  const portfolio = new StockPortfolio();

  portfolio.purchase("RBLX", 1);

  expect(() => {portfolio.sell("RBLX", 2); }).toThrow("Not possible to sell this number of shares.");
});

// 3

// Yes, I was able to successfully follow the test-first approach. This is because this is very familiar to the
// design recipe I have been learning in other CSC classes and I realize how universal and important it is to
// first brainstorm and write tests before writing the actual code. Attempting to write the code head on was
// more difficult because it was difficult to think of both the end result and the functionality to get there.
// Therefore, the red-gren refractor cycle was very helpful in allowing me to focus on one thing at a time and
// make sure that I understood what the inputs and outputs would be before the implementation step.
