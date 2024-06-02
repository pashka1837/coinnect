import styles from './ContactLinks.module.css';
import {supportLink, twitterLink} from '../../../constants/links';
import {twitterLogo} from '../../../svgs/svgs';

export default function ContactLinks() {
	return (
		<div className={styles.links} >
			<a className={styles.link} href={supportLink}>{supportLink}</a>
			<a className={styles.link} href={twitterLink}>{twitterLogo}  (Twitter)</a>
		</div>
	);
}
