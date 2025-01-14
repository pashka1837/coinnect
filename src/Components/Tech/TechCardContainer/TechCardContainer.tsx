import useMediaQuery from '../../../hooks/mediaQuery';
import useSlides from '../../../hooks/useSlides';
import data from '../../../constants/tech_page_data';
import TechCard from '../TechCard/TechCard';
import styles from './TechCardContainer.module.css';

type Props = {
	inView: boolean;
};

export default function TechCardContainer({inView}: Props) {
	const {isTablet, isDesk} = useMediaQuery();
	const {slides} = useSlides({data});

	return (
		<div className={`${styles.hidden} ${inView && styles.open}`}>
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
