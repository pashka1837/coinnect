import styles from './ErrorComp.module.css';
import notFoundIMG from '../../assets/images/404.svg';
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
			<img className={styles.notFound_img} src={notFoundIMG} alt='not found page image' />
		</div>
	);
}
