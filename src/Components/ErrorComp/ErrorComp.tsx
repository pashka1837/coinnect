import styles from './ErrorComp.module.css';
import websiteIMG from '../../assets/images/website_setup.svg';
import {supportLink} from '../../constants/links';
import {useNavigate} from 'react-router-dom';

export default function ErrorComp() {
	const navigate = useNavigate();
	return (
		<div className={`${styles.error_el} container_gr`}>
			<div className={styles.inner}>
				<button
					className={`${styles.home_btn} btn`}
					type='button'
					onClick={() => {
						navigate('/');
					}}
				>← Back Home</button>
				<div>
					<h3 className={styles.text}>This page doesn&apos;t exist!</h3>
					<p>If you have problem with login, signing up or something else, email us at <a className={styles.social_link} href={`mailto:${supportLink}`}>{supportLink}</a></p>
				</div>
			</div>
			<img className={styles.signup_img} src={websiteIMG} alt='website setup image' />
		</div>
	);
}
