import data, {type TechCardData} from '../../constants/tech_page_data';
import styles from './Tech.module.css';

export default function Tech() {
	return (
		<div className={`${styles.tech} container_gr`}>
			<div className={styles.text} >
				<h3>
                    At <span className={styles.logoName}>Wellnes LAB</span>, we leverage cutting-edge technologies in artificial intelligence and blockchain to deliver a robust, secure, and intelligent financial management platform.
				</h3>
			</div>
			<div className={styles.tech_cards_container}>
				{data.map(card => <TechCard key={card.companyLink} {...card} />)}

			</div>
		</div>
	);
}

function TechCard({imgSrc, companyLink, desc}: TechCardData) {
	return (
		<a className={styles.card}
			href={companyLink}>
			<img className={styles.card_img} src={imgSrc} alt='card image' />
			<p className={styles.card_desc}>
				{desc}
			</p>
		</a>
	);
}
