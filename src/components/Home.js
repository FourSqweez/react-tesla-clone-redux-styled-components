import styled from 'styled-components'
import Section from './Section'
import { Element } from 'react-scroll'
import { carInfos } from '../carInfos'

export default function Home() {
	return (
		<Container>
			{carInfos &&
				carInfos.map((info) => (
					<Element id={`section${info.id}`} key={info.id}>
						<Section
							title={info.title}
							description={info.description}
							backgroundImg={info.image}
							leftBtnText="Custom order"
							rightBtnText="Existing inventory"
						/>
					</Element>
				))}

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
