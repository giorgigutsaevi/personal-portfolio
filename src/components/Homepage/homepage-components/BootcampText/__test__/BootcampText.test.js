import { render, screen } from "@testing-library/react"
import BootcampText from "../BootcampText"

describe("BootcampText Component", () => {
	it("renders the component correctly", () => {
		render(<BootcampText />);
		const BootcampTextComponent = screen.getByTestId('bootcampText-div');
		expect(BootcampTextComponent).toBeTruthy();
	})
})