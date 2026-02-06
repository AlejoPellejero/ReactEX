import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, afterEach } from "vitest";
import { FirstStepApp } from "../FirstStepApp";
import { ItemCounter } from "../shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="mocked-item-counter">Mocked ItemCounter</div>;
});

vi.mock("../shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

//vi.mock("../shopping-cart/ItemCounter", () => ({
//  ItemCounter: (props: unknown) => (
//    <div
//      data-testid="mocked-item-counter"
//      itemName={props?.itemName || "default"}
//      itemQuantity={props?.itemQuantity || 0}
//    >
//      Mocked ItemCounter
//    </div>
//  ),
//}));

describe("FirstStepApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter component", () => {
    render(<FirstStepApp />);
    const itemCounters = screen.getAllByTestId("mocked-item-counter");

    expect(itemCounters.length).toBe(3);
    screen.debug();
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      itemName: "Nintendo Switch 2",
      itemQuantity: 1,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      itemName: "PlayStation 5",
      itemQuantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      itemName: "Xbox Series X",
      itemQuantity: 3,
    });
  });
});
