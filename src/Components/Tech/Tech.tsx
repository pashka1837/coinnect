import {useInView} from 'react-intersection-observer';
import styles from './Tech.module.css';
import TechCardContainer from './TechCardContainer/TechCardContainer';

export default function Tech() {
	const {ref, inView} = useInView();

	return (
		<div ref={ref} className={`${styles.tech} container_gr`}>
			<div className={styles.text} >
				<h3 className={`${styles.title} ${styles.hidden} ${inView && styles.open}`}>
                 What Coinnect is built on?
				</h3>
			</div>
			<TechCardContainer inView={inView} />
		</div>
	);
}

