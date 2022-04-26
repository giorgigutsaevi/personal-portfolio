import { render, screen } from "@testing-library/react"
import LoveLetter from "../LoveLetter"

describe("LoveLetter Component", () => {
	it('renders LoveLetter component correctly', () => {
		render(<LoveLetter/>)
		const LoveLetterComponent = screen.getByTestId('loveLetter');
		expect(LoveLetterComponent).toBeTruthy();	
	})
})

