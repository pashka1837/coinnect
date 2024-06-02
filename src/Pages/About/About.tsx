import {Fragment} from 'react/jsx-runtime';
import {dataAbout} from '../../constants/about_page_data';
import styles from './About.module.css';
import Paragraph from '../../Components/About/Paragraph/Paragraph';
import Team from '../../Components/About/Team/Team';

export default function About() {
	return (
		<div className={`${styles.about} container_gr`} >
			{dataAbout.map((d, i) => (
				<Fragment key={d.title}>
					<Paragraph data={d} />
					{i !== dataAbout.length - 1 && <hr className='hr'/>}
				</Fragment>
			))}
			<Team/>
			<hr className='hr'/>
		</div>
	);
}
