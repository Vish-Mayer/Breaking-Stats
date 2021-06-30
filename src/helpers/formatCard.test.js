import { formatCard } from "./FormatCard";

it("reuturns col-md-6 if results data length is 2 ", () => {
  expect(formatCard(2)).toEqual("col-md-6");
});

it("reuturns col-md-3 if results data length is not 2 ", () => {
  expect(formatCard(1)).toEqual("col-md-3");
  expect(formatCard(3)).toEqual("col-md-3");
  expect(formatCard(4)).toEqual("col-md-3");
  expect(formatCard(5)).toEqual("col-md-3");
});
