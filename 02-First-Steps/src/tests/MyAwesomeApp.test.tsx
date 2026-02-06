import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "../MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("Should render the name and last name", () => {
    const { container } = render(<MyAwesomeApp />);

    screen.debug();

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.textContent).toContain("Fernando");
    expect(h3?.textContent).toBe("Herrera");
  });

  test("Should render the name and last name -- Screan", () => {
    render(<MyAwesomeApp />);

    screen.debug();

    const h1 = screen.getByRole("heading", { level: 1 });
    const h3 = screen.getByRole("heading", { level: 3 });

    expect(h1.textContent).toContain("Fernando");
    expect(h3.textContent).toBe("Herrera");
  });

  test("Should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
