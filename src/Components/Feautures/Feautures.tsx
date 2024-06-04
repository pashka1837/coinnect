import styles from './Feautures.module.css';
import Card from './Card/Card';
import data from '../../constants/feature_page_data';
import {useInView} from 'react-intersection-observer';

export default function Feautures() {
	const {ref, inView} = useInView();
	return (
		<div className={`${styles.features} container_gr`} >
			<div className={`${styles.text} ${styles.hidden} ${inView && styles.open}`} >
				<h3>
				Why Coinnect?
				</h3>
			</div>
			<div ref={ref} className={styles.cards_container}>
				{data.map(card => <Card key={card.desc} {...card} inView={inView} />,
				)}
			</div>
		</div>
	);
}
