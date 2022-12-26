import { Route, Routes } from 'react-router-dom'

import Auth from './pages/auth'
import Dash from './pages/dash'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Auth />} />
			<Route path='/dash' element={<Dash />} />
		</Routes>
	)
}

export default App
