import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "../shopping-cart/ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test Item";
    render(<ItemCounter itemName={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText("1")).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Test Item";
    const quantity = 5;
    render(<ItemCounter itemName={name} itemQuantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  //Events
  test("should increment the counter", () => {
    render(<ItemCounter itemName="Test Item" itemQuantity={1} />);
    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);
    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    const quantity = 5;
    render(<ItemCounter itemName="Test Item" itemQuantity={quantity} />);
    const [buttonAdd, buttonMinus] = screen.getAllByRole("button");

    fireEvent.click(buttonMinus);
    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is 1", () => {
    const quantity = 1;
    render(<ItemCounter itemName="Test Item" itemQuantity={quantity} />);
    const [buttonAdd, buttonMinus] = screen.getAllByRole("button");

    fireEvent.click(buttonMinus);
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should change to red when count is 1", () => {
    const quantity = 1;
    const name = "Test Item";
    render(<ItemCounter itemName={name} itemQuantity={quantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("red");
  });

  test("should change to black when count is greater than 1", () => {
    const quantity = 2;
    const name = "Test Item";
    render(<ItemCounter itemName={name} itemQuantity={quantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("black");
  });
});
