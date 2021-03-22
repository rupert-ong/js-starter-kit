import { expect } from "chai";
import fs from "fs";
import jsdom from "jsdom";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.eq(true);
  });
});

describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.eq("Hello world");
    dom.window.close();
  });
});
