import { render, screen } from "@testing-library/react";
import { Dashboard } from "../Dashboard";

describe("Transactions dashboard", () => {
    it("should display placeholder text", () => {
        render(<Dashboard />);

        expect(screen.findByRole("heading", { name: /dashboard list goes here/i }));
    });
});