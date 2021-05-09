import React from "react";

import { render, waitFor, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";

import Card from "./index";

describe.only("renders Card component properly", () => {
  const title = "Pepperoni";
  const price = "$5.99";
  const ingredients = ["pepperoni", "cheese", "sauce"];

  test("renders pizza title", () => {
    render(<Card title={title} price={price} ingredients={ingredients} />);

    expect(screen.getByText("Pepperoni", { exact: true })).toBeInTheDocument();
  });

  test("renders pizza price", () => {
    render(<Card title={title} price={price} ingredients={ingredients} />);

    expect(screen.queryByText("$5.99")).toBeInTheDocument();
  });

  test("renders pizza ingredients", () => {
    render(<Card title={title} price={price} ingredients={ingredients} />);

    expect(screen.queryByText("pepperoni"));
    expect(screen.queryByText("cheese")).toBeInTheDocument();
    expect(screen.queryByText("sauce")).toBeInTheDocument();
  });
});
