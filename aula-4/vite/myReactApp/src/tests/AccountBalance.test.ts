import { render, screen } from "@testing-library/react";
import AccountBalance from "../components/AccountBalance";

test("Render Account Balance Correctly", () => {
    render(<AccountBalance balance={1000} />);
    expect(screen.getByText("$1000")).toBeInTheDocument();
})