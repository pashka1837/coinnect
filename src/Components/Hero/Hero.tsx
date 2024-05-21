import styles from './Hero.module.css';
import heroIMG from '../../assets/images/hero.svg';
import {useNavigate} from 'react-router-dom';

export default function Hero() {
	const navigate = useNavigate();
	return (
		<div className={`${styles.hero} container_gr`} >
			<div className={styles.inner}>
				<div className={styles.text}>
					<h1 className={styles.name}>Wellnes Lab</h1>
					<h2 className={styles.desc}>empowering Your financial future in the Crypto and NFT markets</h2>
				</div>
				<img className={styles.hero_img} src={heroIMG} alt='profile image' />
			</div>
			<div className={styles.btn_container}>
				<button
					className={`${styles.sign_btn} btn`}
					type='button'
					onClick={() => {
						navigate('/signup');
					}}>
					Get Started</button>
			</div>
		</div>
	);
}
