import styles from './ContactLinks.module.css';
import {contactLink, twitterLink} from '../../../constants/links';
import {twitterLogo} from '../../../svgs/svgs';

export default function ContactLinks() {
	return (
		<div className={styles.links} >
			<p className={styles.link} >{contactLink}</p>
			<a className={styles.link} href={twitterLink}>{twitterLogo}  (Twitter)</a>
		</div>
	);
}
