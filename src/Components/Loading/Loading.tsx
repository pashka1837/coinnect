import styles from './Loading.module.css';
import logoIMG from '../../assets/logo.webp';

export default function Loading() {
	return (
		<div className={styles.loader}>
			{/* <h1>loading</h1> */}
			<img className={styles.logoIMG} src={logoIMG} alt='logo img' />
		</div>
	);
}
