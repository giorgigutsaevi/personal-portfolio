import { render, screen, cleanup } from '@testing-library/react'
import IntroductionText from "../IntroductionText"

describe("IntroductionText Component", () => {
	it("renders IntroductionText correctly", () => {
		render(<IntroductionText />);
		const IntroductionTextComponent = screen.getByTestId('introduction-div');
		expect(IntroductionTextComponent).toBeTruthy();
	})
})
