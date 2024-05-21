import styles from './Card.module.css';
import {type CardData} from '../../constants/feature_page_data';
import useMediaQuery from '../../hooks/mediaQuery';

type CardProps = {
	isFlexReverse: boolean;
} & CardData;

export default function Card({imgSrc, desc, isFlexReverse}: CardProps) {
	const {isTablet} = useMediaQuery();
	return (
		<div className={styles.card}
			style={{flexDirection: isTablet ? (isFlexReverse ? 'row-reverse' : 'row') : 'column'}}>
			<img className={styles.card_img} src={imgSrc} alt='card image' />
			<p className={styles.card_desc}>
				{desc}
			</p>
		</div>
	);
}
