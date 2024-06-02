import styles from './Contacts.module.css';

import ContactForm from '../../Components/Contacts/ContactForm/ContactForm';
import useMediaQuery from '../../hooks/mediaQuery';
import ContactLinks from '../../Components/Contacts/ContactLinks/ContactLinks';
import Paragraph from '../../Components/Contacts/Paragraph/Paragraph';

export default function Contacts() {
	const {isDesk} = useMediaQuery();
	return (
		<div className={`${styles.contact} container_gr`}>
			<div className={styles.inner}>
				<Paragraph />
				<hr className='hr' />
				<ContactLinks />
				{!isDesk && <hr className='hr' />}
			</div>
			<ContactForm />
		</div>

	);
}
