import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "../../test-utils";
jest.mock("../../app/hooks");

import Card, { CartBtn } from "./index";

describe("renders Card component properly", () => {
  const name = "Pepperoni";
  const price = "$5.99";
  const ingredients = ["pepperoni", "cheese", "sauce"];

  test("renders pizza name", () => {
    render(<Card name={name} />);

    expect(screen.getByText("Pepperoni", { exact: true })).toBeInTheDocument();
  });

  test("renders pizza price", () => {
    render(<Card price={price} />);

    expect(screen.queryByText("$5.99")).toBeInTheDocument();
  });

  test("renders pizza ingredients", () => {
    render(<Card ingredients={ingredients} />);

    expect(screen.queryByText("pepperoni"));
    expect(screen.queryByText("cheese")).toBeInTheDocument();
    expect(screen.queryByText("sauce")).toBeInTheDocument();
  });

  describe("Add To Cart button", () => {
    test("calls dispatch fn when button is clicked", () => {
      const dispatchAddToCart = jest.fn();

      render(<CartBtn onClick={dispatchAddToCart} />);

      fireEvent.click(screen.getByRole("button"));
      expect(dispatchAddToCart).toHaveBeenCalledTimes(1);
    });
  });
});
