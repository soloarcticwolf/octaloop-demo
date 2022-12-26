import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from '../components/profile'

import '../styles/dash.css'

const Dash = () => {
	const navigate = useNavigate()

	function handleLogout() {
		navigate('/')
	}

	useEffect(() => {
		const hasCookie = document.cookie.includes('accessToken')

		if (!hasCookie) navigate('/')
	})

	return (
		<div className='master-app-container'>
			<div className='sidebar-master-container'>
				<img
					className='img-sidebar'
					src={require('../assets/img/Sidebar1.png')}
					alt=''
				/>
				<div className='logout-button-container' onClick={handleLogout}>
					<img
						className='img-logout'
						src={require('../assets/img/logout.png')}
						alt=''
					/>
					<span className='text-logout'>Logout</span>
				</div>
			</div>
			<Profile />
		</div>
	)
}

export default Dash
