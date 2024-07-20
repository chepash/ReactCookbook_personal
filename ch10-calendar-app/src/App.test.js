// @ts-nocheck
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let renders = [];
let tracker = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) => {
  renders.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
};

let startTime = 0;

describe("App", () => {
  beforeEach(() => {
    renders = [];
    startTime = performance.now();
  });

  afterEach(() => {
    console.table(renders);
    console.log("Time taken: ", performance.now() - startTime);
  });

  it("should move between years", async () => {
    render(<App onRender={tracker} />);

    await userEvent.click(screen.getByRole("button", { name: /previous/i }));
    await userEvent.click(screen.getByRole("button", { name: /previous/i }));
    await userEvent.click(screen.getByRole("button", { name: /previous/i }));
    await userEvent.click(screen.getByRole("button", { name: /next/i }));
    await userEvent.click(screen.getByRole("button", { name: /next/i }));
    await userEvent.click(screen.getByRole("button", { name: /next/i }));
  }, 30000);
});
