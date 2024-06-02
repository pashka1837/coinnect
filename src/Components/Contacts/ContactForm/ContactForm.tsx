import {useState, type FormEvent} from 'react';
import useStore from '../../../feature/store';
import styles from './ContactForm.module.css';

export default function ContactForm() {
	const {setEmail, isEmailSent} = useStore();
	const [inpVals, setInpValse] = useState({name: '', email: '', mesg: ''});

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		setEmail(true);
		form.reset();
	}

	return (
		<form className={styles.myform} onSubmit={handleSubmit}>
			<div className={styles.user_data}>
				<div className={styles.inp_container}>
					<p>Name</p>
					<input
						onChange={e => {
							setInpValse({...inpVals, name: e.currentTarget.value});
						}}
						className={styles.myInput} type='text'
						required />
				</div>
				<div className={styles.inp_container}>
					<p>Email</p>
					<input
						onChange={e => {
							setInpValse({...inpVals, email: e.currentTarget.value});
						}}
						className={styles.myInput} type='email'
						required />
				</div>
			</div>
			<div className={styles.inp_container}>
				<p>Message</p>
				<textarea
					onChange={e => {
						setInpValse({...inpVals, mesg: e.currentTarget.value});
					}}
				 className={styles.myInput}
				 required />
			</div>
			{!isEmailSent && <button disabled={!inpVals.name || !inpVals.email || !inpVals.mesg} className={`btn ${styles.myBtn}`} type='submit'>Submit</button>}
			{isEmailSent && <div className='container_blur'><p>You have successfully sent message.</p></div> }
		</form>
	);
}
