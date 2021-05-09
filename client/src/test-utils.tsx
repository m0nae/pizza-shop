import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";

const Provider: FC = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Provider, ...options });

export * from "@testing-library/react";

export { customRender as render };
