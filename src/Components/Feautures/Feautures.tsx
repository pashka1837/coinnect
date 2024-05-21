import styles from './Feautures.module.css';
import Card from '../Card/Card';
import data from '../../constants/feature_page_data';

export default function Feautures() {
	return (
		<div className={`${styles.features} container_gr`} >
			<div className={styles.text} >
				<h3>
				Discover the power of our AI manager platform
				</h3>
			</div>

			<div className={styles.cards_container}>
				{data.map((card, i) => {
					const isFlexReverse = i % 2 === 0;
					return <Card key={card.desc} {...card} isFlexReverse={isFlexReverse} />;
				},
				)}
			</div>
		</div>
	);
}
