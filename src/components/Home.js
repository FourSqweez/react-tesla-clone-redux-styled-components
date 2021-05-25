import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section from './Section'
import { Element } from 'react-scroll'

export default function Home() {
	const [infos, setInfos] = useState([])
	const [fetchDone, setFetchDone] = useState(false)
	const getData = async () => {
		const results = await fetch('carinfo.json').then((res) => res.json())
		setInfos(results)
		setFetchDone(true)
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<Container>
			{infos &&
				infos.map((info) => (
					<Element id={`section${info.id}`} key={info.id}>
						<Section
							key={info.id}
							title={info.title}
							description={info.description}
							backgroundImg={info.image}
							leftBtnText="Custom order"
							rightBtnText="Existing inventory"
						/>
					</Element>
				))}

			{fetchDone && (
				<>
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
				</>
			)}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
`
