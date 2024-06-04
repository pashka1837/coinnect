import styles from './Card.module.css';
import {type FeatureCardData} from '../../../constants/feature_page_data';

type Props = {
	inView: boolean;
} & FeatureCardData;

export default function Card({title, desc, inView}: Props) {
	console.log(inView);
	return (
		<div className={`${styles.card} ${styles.hidden} ${inView && styles.open}`}>
			<h4 className={styles.card_title}>{title}</h4>
			<p className={styles.card_desc}>
				{desc}
			</p>
		</div>
	);
}
