import {useState} from 'react';
import {type InputState, type SubmitFn} from '../../types';
import MyForm from '../Form/MyForm';
import MyInput from '../MyInput/MyInput';
import styles from './Auth.module.css';
import {useNavigate} from 'react-router-dom';
import useMediaQuery from '../../hooks/mediaQuery';
import loginIMG from '../../assets/images/signup.svg';

export default function Signup() {
	const {isTablet} = useMediaQuery();
	const navigate = useNavigate();

	const [emailInput, setEmailInput] = useState<InputState>({value: '', error: ''});
	const [passwInput, setPasswInput] = useState<InputState>({value: '', error: ''});
	const [passwInput2, setPasswInput2] = useState<InputState>({value: '', error: ''});
	const [lastNaInput, setLastNaInput] = useState<InputState>({value: '', error: ''});
	const [firstNaInput, setFirstNaInput] = useState<InputState>({value: '', error: ''});

	const handleSubmit: SubmitFn = e => {
		e.preventDefault();
		if (passwInput.value !== passwInput2.value) {
			setPasswInput2({...passwInput2, error: 'Password doesn\'t match'});
			return;
		}

		navigate('/login');
	};

	const props = {
		formName: 'Sign up',
		submitBtnName: 'Sign up',
		extraBtnName: 'Login',
		ifLogedin: 'Already have an accaount?',
		navigateTo: '/login',
		isDisable: Boolean(!passwInput.value) || (Boolean(!emailInput.value))
        || (Boolean(!passwInput2.value)) || (Boolean(!firstNaInput.value))
        || (Boolean(!lastNaInput.value)),
	};

	return (
		<div className={`${styles.auth} container_gr`}>
			<h2 className={styles.title} style={{justifySelf: 'self-start'}}>Ready to join and host event?</h2>
			<div className={styles.inner}>
				{isTablet && <img className={styles.auth_img} src={loginIMG} alt='login page image' />}
				<MyForm handleSubmit={handleSubmit} {...props}>
					<MyInput inputState={firstNaInput} setInput={setFirstNaInput} type='text' placeHolder='First Name'/>
					<MyInput inputState={lastNaInput} setInput={setLastNaInput} type='text' placeHolder='Last Name'/>
					<MyInput inputState={emailInput} setInput={setEmailInput} type='email' placeHolder='Email'/>
					<MyInput inputState={passwInput} setInput={setPasswInput} type='password' name='password' placeHolder='Password' />
					<MyInput inputState={passwInput2} setInput={setPasswInput2} type='password' name='password2' placeHolder='Repeat password' />
				</MyForm>
			</div>
		</div>
	);
}
