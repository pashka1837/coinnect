import {type FormEvent} from 'react';
import useStore from '../../feature/store';
import styles from './ContactForm.module.css';

export default function ContactForm() {
	const {setEmail, isEmailSent} = useStore();
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		setEmail(true);
		form.reset();
	}

	return (
		<form className={styles.myform} onSubmit={handleSubmit}>
			{/* <h3 style={{color: '#f0ae00'}}>
                   Send us email
			</h3> */}
			<div className={styles.user_data}>
				<div>
					<p>Name</p>
					<input className={styles.myInput} type='text' required />
				</div>
				<div>
					<p>Email</p>
					<input className={styles.myInput} type='email' required />
				</div>
			</div>
			<div>
				<p>Message</p>
				<textarea className={styles.myInput} required ></textarea>
			</div>
			{!isEmailSent && <button className={`btn ${styles.myBtn}`} type='submit'>Submit</button>}
			{isEmailSent && <div className='container_blur'><p>You have successfully sent message.</p></div> }
		</form>
	);
}
