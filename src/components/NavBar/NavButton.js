import React from "react";
import './NavButton.css'

const STYLES = [
	'btn--primary',
	'btn--outline'
]

const SIZES = [
	'btn--medium',
	'btn--large'
]

export const NavButton = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
	const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

	return (
		<div className='nav-btn'>
			<button className={`btn ${checkButtonStyle} ${checkButtonSizes}`} onClick={onClick} type={type}>
				{children}
			</button>
		</div>
	)

}