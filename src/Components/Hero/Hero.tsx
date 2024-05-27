import styles from './Hero.module.css';
import heroIMG from '../../assets/images/hero.gif';
import {useNavigate} from 'react-router-dom';

export default function Hero() {
	const navigate = useNavigate();
	return (
		<div className={`${styles.hero} container_gr`} >
			<div className={styles.inner}>
				<div className={styles.text}>
					<div>
						<h1 className={styles.name}>COINNECT.</h1>
						<h2 className={styles.title}>Experience the future.</h2>
					</div>
					<h3 className={styles.desc}>Platform that delivers secure, engaging, and interactive virtual events.</h3>
					<div className={styles.btn_container}>
						<button
							className={`${styles.sign_btn} btn`}
							type='button'
							onClick={() => {
								navigate('/signup');
							}}>
					Get Started</button>
						<button
							className={`${styles.sign_btn} btn`}
							type='button'
							onClick={() => {
								navigate('/signup');
							}}>
					Twitter</button>
					</div>
				</div>
				<img className={styles.hero_img} src={heroIMG} alt='profile image' />
			</div>
		</div>
	);
}
