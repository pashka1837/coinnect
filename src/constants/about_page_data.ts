import aliceIMG from '../assets/images/team/Alice.jpeg';
import bobbyIMG from '../assets/images/team/Bobby.jpeg';
import pacoIMG from '../assets/images/team/Paco.jpeg';
import josephIMG from '../assets/images/team/Joseph.jpeg';

export type AboutData = {
	title: string;
	text: string;
};

export type PersonData = {
	img: string;
	name: string;
	desc: string;
};

const dataAbout: AboutData[] = [
	{
		title: 'Our Story',
		text: 'Founded in 2023, The Coinnect was born from the need to revolutionize the virtual event industry. Our mission is to merge the latest in blockchain and cryptocurrency technology with the world of online events, offering a secure, engaging, and transparent platform for organizers and participants alike.',
	},
	{
		title: 'Our Mission',
		text: 'To provide a cutting-edge platform that enhances virtual events with blockchain technology, ensuring security, transparency, and a superior user experience.',
	},
	{
		title: 'Our Vision',
		text: 'We envision a future where virtual events are not just an alternative to in-person gatherings but a superior experience, enriched by the possibilities of blockchain technology.',
	},
	{
		title: 'Our Team',
		text: 'Meet the innovators behind Coinnect. Our team comprises experts in blockchain development, event management, and software engineering, dedicated to delivering a world-class platform.',
	},
];

const teamData: PersonData[] = [
	{
		img: pacoIMG,
		name: 'Paco Condezo',
		desc: 'CEO & Founder, Blockchain Expert',
	},
	{
		img: josephIMG,
		name: 'Joseph Joul',
		desc: 'CTO, Software Engineer',
	},
	{
		img: aliceIMG,
		name: 'Alice Johnson',
		desc: 'Event Management Specialist',
	},
	{
		img: bobbyIMG,
		name: 'Bobby Brown',
		desc: 'Lead Developer, Smart Contracts Specialist',
	},
];

export {dataAbout, teamData};
