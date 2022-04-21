import React, { useState, createContext } from 'react'

const BlurContext = createContext();

const BlurContextProvider = (props) => {
	const [isBlurred, SetIsBlurred] = useState(false)

	return (
		<BlurContext.Provider value={{ isBlurred, SetIsBlurred }}>
			{props.children}
		</BlurContext.Provider>

	)
}

export default BlurContext;
export { BlurContextProvider };