import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

const PROPS = {};

it("renders correctly", () => {
  const { container } = render(<Header {...PROPS} />);
  expect(container.firstChild).toMatchSnapshot();
});
