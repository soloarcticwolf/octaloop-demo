import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/auth.css'

const Auth = () => {
	const navigate = useNavigate()

	const emailRef = useRef(null)
	const passwordRef = useRef(null)

	const [hasErrored, setHasErrored] = useState(false)

	async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setHasErrored(false)

		navigate('/dash')

		// @ts-ignore
		// const email = emailRef.current.value
		// // @ts-ignore
		// const password = passwordRef.current.value

		// const baseURL = 'http://localhost:3000'

		// try {
		// 	const response = await axios.post(`${baseURL}/signin`, {
		// 		email,
		// 		password,
		// 	})

		// 	if (response.status === 202) return navigate('/dash')
		// 	else throw new Error('')
		// } catch (error) {
		// 	setHasErrored(true)
		// }
	}

	return (
		<div className='auth-master-container'>
			<div className='auth-container'>
				<nav className='nav-bar'>
					<p className='logo-text'>Binamite</p>
					<div className='nav-links'>
						<ul>
							<li className='nav-item'>Pricing</li>
							<li className='nav-item'>Who it’s for</li>
							<li className='nav-item'>Features</li>
							<li className='nav-item'>Blog</li>
							<li className='nav-item'>
								<img src={require('../assets/img/logo-insta.png')} alt='' />
							</li>
							<li className='nav-item'>
								<img src={require('../assets/img/logo-fb.png')} alt='' />
							</li>
						</ul>
					</div>
					<div className='nav-action-container'>
						<button className='btn-nav-action'>Sign Up Free</button>
						<button className='btn-nav-action'>
							Login{' '}
							<img
								className='img-right-arrow'
								src={require('../assets/img/icon-right-arrow.png')}
								alt=''
							/>
						</button>
					</div>
				</nav>
				<div className='auth-content-container'>
					<div className='auth-card-container'>
						<div className='auth-card-header'>
							<p className='pre-header-text'>Type something here</p>
							<p className='header-text'>Sign up to Binamite</p>
							<p className='post-header-text'>
								Already a member? <span className='btn-sign-in'>Sign In</span>{' '}
							</p>
						</div>
						<form
							className='auth-card-inputs'
							onSubmit={(e) => handleFormSubmit(e)}
						>
							<div className='auth-input-container'>
								<div className='text-input-header'>Email ID</div>
								<input
									type='email'
									className='auth-input'
									autoComplete='email'
									placeholder='name@email.com'
									ref={emailRef}
								/>
								<img
									src={require('../assets/img/icon-at.png')}
									alt=''
									className='input-icon'
								/>
							</div>
							{hasErrored ? (
								<p className='error-message'>Login failed. Please retry !</p>
							) : null}
							<div className='auth-input-container'>
								<div className='text-input-header'>Password</div>
								<input
									ref={passwordRef}
									type='password'
									autoComplete='current-password'
									className='auth-input'
									placeholder='8+ characters, 1 Capital letter'
								/>
								<img
									src={require('../assets/img/unlock.png')}
									alt=''
									className='input-icon'
								/>
							</div>
							<p className='password-hint'>
								1 lower character, 1 upper character, 1 number, and 1 special
								character, also keep it minimum 8 characters long.
							</p>
							<div className='newsletter-check-container'>
								<input type='checkbox' className='check-input' />
								<p className='subscription-text'>Subscribe to newsletter</p>
							</div>
							<div className='auth-action-buttons-container'>
								<input
									type='submit'
									className='btn-auth-action signin'
									value={'Sign in to account'}
									readOnly
								/>
								<button className='btn-auth-action signup-google'>
									<img src={require('../assets/img/icon-google.png')} alt='' />
									Sign Up with Google
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth
