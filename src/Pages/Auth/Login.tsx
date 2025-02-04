import {useState} from 'react';
import {type InputState, type SubmitFn} from '../../types';
import MyForm from '../../Components/MyForm/MyForm';
import MyInput from '../../Components/MyInput/MyInput';
import styles from './Auth.module.css';
import useMediaQuery from '../../hooks/mediaQuery';
import loginIMG from '../../assets/images/login.svg';

export default function Login() {
	const {isTablet} = useMediaQuery();
	const [emailInput, setEmailInput] = useState<InputState>({value: '', error: ''});
	const [passwInput, setPasswInput] = useState({value: '', error: ''});

	const handleSubmit: SubmitFn = e => {
		e.preventDefault();
		setEmailInput({...emailInput, error: 'Wrong email!'});
	};

	const props = {
		formName: 'Login',
		submitBtnName: 'Login',
		extraBtnName: 'Sign up',
		ifLogedin: 'Don\'t have an accaount?',
		navigateTo: '/signup',
		isDisable: (Boolean(!passwInput.value) || (Boolean(!emailInput.value))),
	};

	return (
		<div className={`${styles.auth} container_gr`}>
			<h2 className={styles.title}>Welcome back, let&apos;s get started!</h2>
			<div className={styles.inner}>
				{isTablet ? <img className={styles.auth_img} src={loginIMG} alt='login page image' /> : null}
				<MyForm handleSubmit={handleSubmit} {...props}>
					<MyInput inputState={emailInput} setInput={setEmailInput} type='email' placeHolder='Email'/>
					<MyInput inputState={passwInput} setInput={setPasswInput} type='password' placeHolder='Password' />
				</MyForm>
			</div>
		</div>
	);
}
