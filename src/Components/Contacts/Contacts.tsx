import styles from './Contacts.module.css';
import {supportLink, twitterLink} from '../../constants/links';
import {twitterLogo} from '../../svgs/svgs';
import ContactForm from './ContactForm';
import useMediaQuery from '../../hooks/mediaQuery';

export default function Contacts() {
	const {isDesk} = useMediaQuery();
	return (
		<div className={`${styles.contact} container_gr`}>
			<div className={styles.inner}>
				<div className={styles.text} >
					<h1>Contact Us</h1>
					<div className={styles.text_info}>
						<p>Want to learn more about Coinnect?  Reach out to collaborate.</p>
						<p>Have a question about your NFT ticketization? Drop us a note.</p>
					</div>
				</div>
				<hr className='hr' />
				<div className={styles.links} >
					<a className={styles.link} href={supportLink}>{supportLink}</a>
					<a className={styles.link} href={twitterLink}>{twitterLogo}  (Twitter)</a>
				</div>
				{!isDesk && <hr className='hr' />}
			</div>
			<ContactForm />
		</div>

	);
}
