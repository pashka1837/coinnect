import data, {type TechCardData} from '../../constants/tech_page_data';
import styles from './Tech.module.css';
import useMediaQuery from '../../hooks/mediaQuery';
import useSlides from '../../hooks/useSlides';

export default function Tech() {
	const {isTablet, isDesk} = useMediaQuery();
	const {slides} = useSlides({data});

	return (
		<div className={`${styles.tech} container_gr`}>
			<div className={styles.text} >
				<h3>
                 What Coinnect is built on?
				</h3>
			</div>
			{isTablet && isDesk && (
				<div className={`${styles.cards_container} ${styles.big}`}>
				 	<TechCard {...data.at(slides.prev)!} />
				 	<TechCard {...data.at(slides.cur)!} />
				 	<TechCard {...data.at(slides.next)!} />
				 </div>
			)}
			{isTablet && !isDesk &&	 (
				<div className={`${styles.cards_container} ${styles.md}`}>
					<TechCard {...data.at(slides.cur)!} />
					<TechCard {...data.at(slides.next)!} />
				</div>
			)}
			{!isTablet && (
				<div className={`${styles.cards_container} ${styles.sm}`}>
					<TechCard {...data.at(slides.next)!} />
				</div>
			)}
		</div>
	);
}

function TechCard({imgSrc, desc}: TechCardData) {
	return (
		<div className={styles.card}>
			<img className={styles.card_img} src={imgSrc} alt='card image' />
			<p className={styles.card_desc}>
				{desc}
			</p>
		</div>
	);
}
