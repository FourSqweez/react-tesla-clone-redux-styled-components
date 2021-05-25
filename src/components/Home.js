import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
	const [infos, setInfos] = useState([])
	const getData = async () => {
		const results = await fetch('carinfo.json').then((res) => res.json())
		setInfos(results)
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<Container>
			{infos &&
				infos.map((info) => (
					<Section
						key={info.id}
						title={info.title}
						description={info.description}
						backgroundImg={info.image}
						leftBtnText="Custom order"
						rightBtnText="Existing inventory"
					/>
				))}
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
				backgroundImg="solar-roof.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
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
