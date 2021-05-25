import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section from './Section'
import { Element } from 'react-scroll'

export default function Home() {
	return (
		<Container>
			<Element id="section0">
				<Section
					title="Model S"
					description="Order Online for Touchless Delivery"
					backgroundImg="model-s.jpg"
					leftBtnText="Custom order"
					rightBtnText="Existing inventory"
				/>
			</Element>
			<Element id="section1">
				<Section
					title="Model 3"
					description="Order Online for Touchless Delivery"
					backgroundImg="model-3.jpg"
					leftBtnText="Custom order"
					rightBtnText="Existing inventory"
				/>
			</Element>
			<Element id="section2">
				<Section
					title="Model X"
					description="Order Online for Touchless Delivery"
					backgroundImg="model-x.jpg"
					leftBtnText="Custom order"
					rightBtnText="Existing inventory"
				/>
			</Element>
			<Element id="section3">
				<Section
					title="Model Y"
					description="Order Online for Touchless Delivery"
					backgroundImg="model-y.jpg"
					leftBtnText="Custom order"
					rightBtnText="Existing inventory"
				/>
			</Element>

			<Element id="solar-roof">
				<Section
					title="Solar for New Roofs"
					description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
					backgroundImg="solar-roof.jpg"
					leftBtnText="Order now"
					rightBtnText="Learn more"
				/>
			</Element>
			<Element id="solar-panels">
				<Section
					title="Lowest Cost Solar Panels in America"
					description="Money-back guarantee"
					backgroundImg="solar-panel.jpg"
					leftBtnText="Order now"
					rightBtnText="Learn more"
				/>
			</Element>

			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop now"
			/>
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
`
