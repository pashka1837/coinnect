import {type AboutData} from '../../../constants/about_page_data';
import styles from './Paragraph.module.css';

type Props = {
	data: AboutData;
};
export default function Paragraph({data}: Props) {
	return (
		<div className={styles.paragraph} >
			<h1 className={styles.title}>{data.title}</h1>
			<div className={styles.desc_container}>
				<p className={styles.text}>{data.text}</p>
			</div>
		</div>
	);
}
