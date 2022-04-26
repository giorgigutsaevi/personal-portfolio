import { render, screen } from "@testing-library/react"
import Outro from "../Outro"
import { BrowserRouter as Router } from 'react-router-dom'

describe("Outro Component", () => {
	it("renders Outro Component correctly", () => {

		render(
			<Router>
				<Outro />
			</Router>

		);
		const OutroComponent = screen.getByTestId('outro');
		expect(screen.getByText(/Thanks for stopping by!/i)).toBeInTheDocument()
		expect(OutroComponent).toBeTruthy();
	})
})