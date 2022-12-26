import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../styles/profile.css'
import Modal from './modal'

const Profile = () => {
	const navigate = useNavigate()

	const [showModal, setShowModal] = useState(false)
	const [user, setUser] = useState({
		name: 'Nikhil Bhintade',
		username: 'bhintade.nikhil',
		email: 'nikhilbhintade@octaloop.com',
		phone: '94111111435',
		address:
			'A-83, Second Floor, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020',
		timeZone: 'UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi',
	})

	const expertise = [
		'graphic design',
		'visual design',
		'user research',
		'prototyping',
	]

	useEffect(() => {
		const cookies = document.cookie.split('; ')

		// const index = cookies.findIndex((cookie) =>
		// 	cookie.startsWith('accessToken')
		// )

		// if (index < 0) return navigate('/')

		// const authToken = cookies[index].split('=')[1]

		const baseURL = 'http://localhost:3000'

		axios
			.get(`${baseURL}/user`)
			.then((response) => {
				const { data } = response
				setUser({
					...user,
					name: data.name,
					email: data.email,
					address: data.address,
				})
			})
			.catch((err) => {})
	})

	return (
		<>
			<div className={`modal-screen ${showModal ? '' : 'modal-hide'}`}>
				<Modal user={user} setUser={setUser} setShowModal={setShowModal} />
			</div>
			<div className='profile-master-container'>
				<div className='profile-inner-container'>
					<div className='profile-header header-text'>Contractor Profile</div>
					<div className='profile-contents'>
						<div className='profile-half'>
							<div className='card'>
								<div className='card-headers'>
									<div className='card-header-text'>Profile</div>
									<div className='header-action'>
										<FaEdit />
										<span
											className='text-manage'
											onClick={() => setShowModal(true)}
										>
											Manage
										</span>
									</div>
								</div>

								<div className='profile-content'>
									<div className='avatar-container'>
										<img
											className='profile-image'
											src='https://dummyimage.com/200x200/000/fff'
											alt=''
										/>
									</div>
									<div className='profile-details'>
										<p className='header-title name'>full name</p>
										<p className='header-content'>{user.name}</p>
										<p className='header-title username'>username</p>
										<p className='header-content'>{user.username}</p>
										<p className='header-title email'>Email Address</p>
										<p className='header-content'>{user.email}</p>
										<p className='header-title phone'>Phone Number</p>
										<p className='header-content'>
											{`+91 ${user.phone.replace(
												user.phone.substring(2, 8),
												'******'
											)}`}
										</p>
										<div className='header-title expertise'>Expertise</div>
										<div className='user-expertise-container'>
											{expertise.map((exp, index) => (
												<span className='user-expertise' key={index}>
													{exp}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className='card'>
								<div className='card-headers'>
									<div className='card-header-text'>Address Location</div>
									<div className='header-action'>
										<FaEdit />
										<span className='text-manage'>Manage</span>
									</div>
								</div>

								<div className='address-details'>
									<div className='header-title name'>Time Zone</div>
									<div className='header-content'>
										UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi
									</div>
									<div className='header-title username'>Primary</div>
									<div className='header-content'>
										A-83, Second Floor, Pocket D, Okhla Phase II, Okhla
										Industrial Estate, New Delhi, Delhi 110020
									</div>
								</div>
							</div>
						</div>
						<div className='profile-half'>
							<div className='card'>
								<div className='card-headers'>
									<div className='card-header-text'>
										Tax Identification (ID)
									</div>
									<div className='header-action'>
										<FaEdit />
										<span className='text-manage'>Manage</span>
									</div>
								</div>
								<div className='header-desc'>
									A Primary Account Number (PAN) is requested from all companies
									located in India.
								</div>
								<div className='address-details'>
									<div className='header-title name'>Legal Taxpayer Name</div>
									<div className='header-content'>
										Octaloop Technologies Private Limited
									</div>
									<div className='header-title username'>PAN Number</div>
									<div className='header-content pan-data'>SFSFG8779B</div>
									<p className='error-msg'>*PAN Pending Verification</p>
									<button className='action-button purple'>Verify Now</button>
								</div>
							</div>

							<div className='card'>
								<div className='card-headers'>
									<div className='card-header-text'>GSTIN</div>
									<div className='header-action'>
										<FaEdit />
										<span className='text-manage'>Manage</span>
									</div>
								</div>
								<div className='header-desc'>
									A Good & Services Tax Identification Number is requested from
									all persons located in country where Binamite Supports GSTIN.
								</div>
								<div className='address-details'>
									<div className='header-title name'>GSTIN</div>
									<div className='header-content'>356DFHSFSFG8779B</div>
								</div>
							</div>

							<div className='card'>
								<div className='card-headers'>
									<div className='card-header-text'>W-8BEN</div>
									<div className='header-action'>
										<FaEdit />
										<span className='text-manage'>Manage</span>
									</div>
								</div>
								<div className='header-desc'>
									A Good & Services Tax Identification Number is requested from
									all persons located in country where Binamite Supports GSTIN.
								</div>
								<div className='address-details'>
									<div className='header-title name'>Legal Taxpayer Name</div>
									<div className='header-content'>
										Octaloop Technologies Private Limited
									</div>
								</div>
							</div>

							<div className='card'>
								<div className='card-headers'>
									<div className='card-header-text'>W-9</div>
									<div className='header-action'>
										<FaEdit />
										<span className='text-manage'>Manage</span>
									</div>
								</div>
								<div className='header-desc'>
									A Good & Services Tax Identification Number is requested from
									all persons located in country where Binamite Supports GSTIN.
								</div>
								<div className='address-details'>
									<div className='header-title name'>Legal Taxpayer Name</div>
									<div className='header-content'>
										Octaloop Technologies Private Limited
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
