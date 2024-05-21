import {type FormEvent} from 'react';
import useStore from '../../feature/store';
import styles from './Contacts.module.css';
import {supportLink, twitterLink} from '../../constants/links';
import {twitterLogo} from '../../svgs/svgs';

export default function Contacts() {
	const {setEmail, isEmailSent} = useStore();
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		setEmail(true);
		form.reset();
	}

	return (
		<div className={`${styles.contact} container_gr`}>
			<div className={styles.text} >
				<h3>
                   Contact Us
				</h3>
			</div>
			<div className={styles.links} >
				<div className={styles.link}>
					<p>Support Team:</p>
					<a href={supportLink}>{supportLink}</a>
				</div>
				<div className={styles.link}>
					<p>Twitter:</p>
					<a href={twitterLink}>{twitterLogo}</a>
				</div>
			</div>

			<form className={styles.myform} onSubmit={handleSubmit}>
				<h3>
                   Send us email
				</h3>
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
				<button disabled={isEmailSent} className={`${styles.myBtn}`} type='submit'>Send</button>
				{isEmailSent && <div className='container_blur'><p>You have successfully sent message.</p></div> }
			</form>
		</div>
	);
}
