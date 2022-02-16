import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders and h1", () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/Intro to React testing/);
    expect(h1).toHaveTextContent("Intro to React testing");
});