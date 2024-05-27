import {useEffect, useState} from 'react';
import data, {type TechCardData} from '../../constants/tech_page_data';
import styles from './Tech.module.css';
import useMediaQuery from '../../hooks/mediaQuery';

export default function Tech() {
	const {isTablet, isDesk} = useMediaQuery();
	const [slides, setSlides] = useState({
		prev: 0,
		cur: 1,
		next: 2,
	});

	useEffect(() => {
		setTimeout(() => {
			const lastEl = data.length - 1;
			if (slides.prev < lastEl - 2) {
				setSlides({prev: slides.prev + 1, cur: slides.cur + 1, next: slides.next + 1});
			} else {
				setSlides({prev: -2, cur: -1, next: 0});
			}
		}, 2000);
		console.log(slides.prev, slides.cur, slides.next);
	}, [slides.prev]);

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
