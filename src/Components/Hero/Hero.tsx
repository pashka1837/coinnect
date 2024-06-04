import styles from './Hero.module.css';
import heroIMG from '../../assets/images/hero.gif';
import {useNavigate} from 'react-router-dom';
import {useInView} from 'react-intersection-observer';

export default function Hero() {
	const navigate = useNavigate();
	const {ref, inView} = useInView();
	return (
		<div className={`${styles.hero} container_gr`} >
			<div className={styles.inner}>
				<div ref={ref} className={styles.text}>
					<div className={` ${styles.hidden} ${inView && styles.open}`}>
						<h1 className={styles.name}>COINNECT.</h1>
						<h2 className={styles.title}>Experience the future.</h2>
					</div>
					<h3 className={` ${styles.desc} ${styles.hidden} ${inView && styles.open}`}>Platform that delivers secure, engaging, and interactive virtual events.</h3>
					<div className={` ${styles.btn_container} ${styles.hidden} ${inView && styles.open}`}>
						<button
							className={`${styles.sign_btn} btn`}
							type='button'
							onClick={() => {
								navigate('/signup');
							}}>
					Get Started</button>
					</div>
				</div>
				<img className={styles.hero_img} src={heroIMG} alt='profile image' />
			</div>
		</div>
	);
}
