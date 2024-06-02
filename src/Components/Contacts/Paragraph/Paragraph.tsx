import styles from './Paragraph.module.css';

export default function Paragraph() {
	return (
		<div className={styles.paragraph} >
			<h1 className={styles.title}>Contact Us</h1>
			<div className={styles.desc}>
				<p>Want to learn more about Coinnect?  Reach out to collaborate.</p>
				<p>Have a question about your NFT ticketization? Drop us a note.</p>
			</div>
		</div>
	);
}
