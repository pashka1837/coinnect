import styles from './TechCard.module.css';
import {type TechCardData} from '../../../constants/tech_page_data';

export default function TechCard({imgSrc, desc}: TechCardData) {
	return (
		<div className={styles.card}>
			<img className={styles.card_img} src={imgSrc} alt='card image' />
			<p className={styles.card_desc}>
				{desc}
			</p>
		</div>
	);
}
