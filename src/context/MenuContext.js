import React, { useState, createContext } from 'react'

const MenuContext = createContext();

const MenuContextProvider = (props) => {
	const [isClicked, setIsClicked] = useState(false)

	return (
		<MenuContext.Provider value={{ isClicked, setIsClicked }}>
			{props.children}
		</MenuContext.Provider>

	)
}

export default MenuContext;
export { MenuContextProvider };