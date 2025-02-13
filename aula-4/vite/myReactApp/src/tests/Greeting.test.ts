import {Greeting} from "../components/Greeting";
import { render, screen } from "@testing-library/react";
import "@testing-linrary/jest-dom";

test("Expect to render a greeting", () => {
    render(<Greeting name="Rafael" />);
    expect(screen.getByText("Hello Rafael")).toBeInTheDocument();
})