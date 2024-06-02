import {Link} from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={`${styles.footer}`} >
			<div className={styles.links}>
				<Link to={'/contact'}>Contact us</Link>
			</div>
			<div className={styles.rights}>
				<p>Copyright © 2024 Coinnect,<span>x</span></p>
				<p>All rights reserved</p>
			</div>
		</div>
	);
}
