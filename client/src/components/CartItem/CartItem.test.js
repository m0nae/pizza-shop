import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "../../test-utils";

import CartItem from "./index";

describe("renders cart item component properly", () => {
  test("cart item displays pizza title", () => {
    const title = "Pepperoni";

    render(<CartItem title={title} />);
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();
  });

  test("cart item displays pizza quantity", () => {
    const quantity = 6;

    render(<CartItem quantity={quantity} />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
