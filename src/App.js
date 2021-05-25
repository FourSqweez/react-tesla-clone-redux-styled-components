import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

export const BgContext = createContext()

function App() {
	const [showBurger, setShowBurger] = useState(false)

	const value = {
		showBurger,
		setShowBurger,
	}
	return (
		<div className="App">
			<BgContext.Provider value={value}>
				<Header />
				<Home />
			</BgContext.Provider>
		</div>
	)
}

export default App
