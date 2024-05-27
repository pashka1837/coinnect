import styles from './Card.module.css';
import {type FeatureCardData} from '../../constants/feature_page_data';

export default function Card({title, desc}: FeatureCardData) {
	return (
		<div className={styles.card}>
			<h4 className={styles.card_title}>{title}</h4>
			<p className={styles.card_desc}>
				{desc}
			</p>
		</div>
	);
}
