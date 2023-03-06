import React from "react"

function Header({ children }) {
	return (
		<header>
			<h1>Meet the Team</h1>
			{children}
		</header>
	)
}

export default Header
