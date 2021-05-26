import styled from 'styled-components'
import Fade from 'react-reveal'
import { useContext } from 'react'
import { BgContext } from '../App'

export default function Section({
	title,
	description,
	backgroundImg,
	leftBtnText,
	rightBtnText,
}) {
	const { showBurger } = useContext(BgContext)

	return (
		<Wrap imgUrl={backgroundImg} showBurger={showBurger}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					<p>{description}</p>
				</ItemText>
			</Fade>

			<Buttons>
				<ButtonGroup>
					{rightBtnText ? (
						<Fade left>
							<LeftButton>{leftBtnText}</LeftButton>
						</Fade>
					) : (
						<Fade bottom>
							<LeftButton>{leftBtnText}</LeftButton>
						</Fade>
					)}
					{rightBtnText && (
						<Fade right>
							<RightButton>{rightBtnText}</RightButton>
						</Fade>
					)}
				</ButtonGroup>

				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	)
}

const handleShowBurger = (show) => {
	if (show) {
		return '-webkit-filter: brightness(50%); filter: brightness(50%)g;'
	}
}

const Wrap = styled.div`
	z-index: 10;
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${({ imgUrl }) => `images/${imgUrl}`});
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	${({ showBurger }) => handleShowBurger(showBurger)};
`
const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`

const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`
const Buttons = styled.div``
