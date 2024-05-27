import styles from './Feautures.module.css';
import Card from '../Card/Card';
import data from '../../constants/feature_page_data';

export default function Feautures() {
	return (
		<div className={`${styles.features} container_gr`} >
			<div className={styles.text} >
				<h3>
				Why Coinnect?
				</h3>
			</div>

			<div className={styles.cards_container}>
				{data.map(card => <Card key={card.desc} {...card} />,
				)}
			</div>
		</div>
	);
}
