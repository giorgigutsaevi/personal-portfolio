import {render, screen} from "@testing-library/react"
import Quote from "../Quote"

describe("Quote component", () => {
	it("renders Quote component correctly", () => {
		render(<Quote/>);
		const QuoteComponent = screen.getByTestId('quote');
		expect(QuoteComponent).toBeTruthy();
	})
})