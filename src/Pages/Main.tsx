import Feautures from '../Components/Feautures/Feautures';
import Hero from '../Components/Hero/Hero';
import Tech from '../Components/Tech/Tech';

export default function Main() {
	return (
		<div style={{display: 'grid', placeItems: 'center'}}>
			<Hero/>
			<hr className='hr'/>
			<Feautures />
			<hr className='hr'/>
			<Tech />
		</div>
	);
}
