import styles from './MenuItems.module.css';
import Item from './Item';

export type MyLink = {
	href: string;
	desc: string;
	svg?: JSX.Element;
};

const links: MyLink[] = [
	{
		href: '/',
		desc: 'Home',
	},
	{
		href: '/about',
		desc: 'About Us',
	},
	{
		href: '/contacts',
		desc: 'Contacts',
	},
	{
		href: '/login',
		desc: 'Profile',
	},

];

export default function MenuItems() {
	return (
		<div className={styles.menuItems}>
			{links.map(link => <Item key={link.href} {...link}/>)}
		</div>
	);
}
