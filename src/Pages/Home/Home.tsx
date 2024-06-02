import Feautures from '../../Components/Feautures/Feautures';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Tech from '../../Components/Tech/Tech';

export default function Home() {
	return (
		<div style={{display: 'grid', placeItems: 'center'}}>
			<Hero/>
			<hr className='hr'/>
			<Feautures />
			<hr className='hr'/>
			<Tech />
			<hr className='hr'/>
			<Footer />
		</div>
	);
}
