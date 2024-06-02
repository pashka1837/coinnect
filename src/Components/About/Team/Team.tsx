import {teamData, type PersonData} from '../../../constants/about_page_data';
import styles from './Team.module.css';

type Props = {
	person: PersonData;
};

export default function Team() {
	return (
		<div className={styles.team}>
			{teamData.map(per => <Person key={per.name} person={per} />)}
		</div>
	);
}

function Person({person}: Props) {
	return (
		<div className={styles.person}>
			<img className={styles.person_img} src={person.img} alt={`${person.name} image`} />
			<h3>{person.name}</h3>
			<p className={styles.desc}>{person.desc}</p>
		</div>
	);
}
