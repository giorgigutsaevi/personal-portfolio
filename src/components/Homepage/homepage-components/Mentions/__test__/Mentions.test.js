import { render, screen } from "@testing-library/react"
import Mentions from "../Mentions"

describe("Mentions Component", () => {
	it("renders Mentions Component correctly", () => {
		render(<Mentions />);
		const MentionsComponent = screen.getByTestId('mentions');
		expect(MentionsComponent).toBeTruthy();
	})
})