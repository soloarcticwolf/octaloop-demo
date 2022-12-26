import axios from 'axios'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import '../styles/modal.css'

type Props = {
	setUser: (val: any) => void
	setShowModal: (val: boolean) => void
	user: any
}

const Modal = (props: Props) => {
	const [userInfo, setUserInfo] = useState({
		name: props.user.name,
		email: props.user.email,
		username: props.user.username,
		phone: props.user.phone,
	})

	function closeModal() {
		props.setShowModal(false)
	}

	function updateUserInfo() {
		const baseURL = 'http://localhost:3000'
		axios
			.post(`${baseURL}/updateProfile`, userInfo)
			.then(() => {
				props.setUser({ ...props.user, ...userInfo })
				closeModal()
			})
			.catch((err) => {})
	}

	return (
		<div className='modal-master-container'>
			<div className='modal-inner-container'>
				<div className='modal-header'>
					<div className='card-header-text'>Personal Details</div>
					<div className='header-desc mt-10'>
						Praesent sit amet velit lobortis, volutpat odio eget, tincidunt
						eros.
					</div>
				</div>
				<div className='modal-field-contents'>
					<form action=''>
						<div className='modal-content'>
							<p className='content-header'>Full name</p>
							<input
								className='content-input'
								type='text'
								value={userInfo.name}
								onChange={(e) =>
									setUserInfo({ ...userInfo, name: e.target.value })
								}
							/>
						</div>
						<div className='modal-content'>
							<p className='content-header'>Email ID</p>
							<input
								className='content-input'
								type='email'
								value={userInfo.email}
								onChange={(e) =>
									setUserInfo({ ...userInfo, email: e.target.value })
								}
							/>
						</div>
						<p className='button-add'>
							<span className='text-plus'>+</span> Add New
						</p>
						<div className='modal-content'>
							<p className='content-header'>Username</p>
							<input
								className='content-input'
								type='text'
								value={userInfo.username}
								onChange={(e) =>
									setUserInfo({ ...userInfo, username: e.target.value })
								}
							/>
						</div>
						<div className='modal-content'>
							<p className='content-header'>Phone no.</p>
							<input
								className='content-input'
								type='text'
								value={userInfo.phone}
								onChange={(e) =>
									setUserInfo({ ...userInfo, phone: e.target.value })
								}
							/>
						</div>
						<p className='button-add'>
							<span className='text-plus'>+</span> Add New
						</p>
					</form>
					<div className='form-actions'>
						<button className='action-button icon-button dark'>
							<BiArrowBack color='yellow' />
							<p className='btn-text' onClick={updateUserInfo}>
								Update Details
							</p>
						</button>
						<button
							className='action-button disabled'
							onClick={() => closeModal()}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
