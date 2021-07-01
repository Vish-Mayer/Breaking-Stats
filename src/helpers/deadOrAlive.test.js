import { deadOrAlive } from "./deadOrAlive";

describe("deadOrAlive", () => {
  it("returns an image__overlay class 'alive' if character status is Alive", () => {
    expect(deadOrAlive("Alive")).toEqual("image__overlay alive");
  });

  it("returns an image__overlay class 'dead' if character status is Deceased", () => {
    expect(deadOrAlive("Deceased")).toEqual("image__overlay dead");
  });

  it("returns default image__overlay class if character status is unknown", () => {
    expect(deadOrAlive("")).toEqual("image__overlay");
  });
});
