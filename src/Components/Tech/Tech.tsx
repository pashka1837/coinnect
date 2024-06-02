import styles from './Tech.module.css';
import TechCardContainer from './TechCardContainer/TechCardContainer';

export default function Tech() {
	return (
		<div className={`${styles.tech} container_gr`}>
			<div className={styles.text} >
				<h3 className={styles.title}>
                 What Coinnect is built on?
				</h3>
			</div>
			<TechCardContainer />
		</div>
	);
}

