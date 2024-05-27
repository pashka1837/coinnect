import {supportLink, twitterLink} from '../../constants/links';
import {twitterLogo} from '../../svgs/svgs';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={`${styles.footer}`} >

			<div className={styles.links}>
				<h4>Contact us:</h4>
				<a href={`mailto:${supportLink}`}>{supportLink}</a>
				<a href={twitterLink}>{twitterLogo}</a>
			</div>
			<div className={styles.rights}>
				<p>Copyright © 2024 Coinnect,<span>x</span></p>
				<p>All rights reserved</p>
			</div>
		</div>
	);
}
