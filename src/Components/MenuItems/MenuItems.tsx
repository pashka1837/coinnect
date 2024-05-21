import styles from './MenuItems.module.css';
import Item from './Item';
// Import {twitterLink} from '../../constants/links';

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
		href: '/features',
		desc: 'Features',
	},
	{
		href: '/tech',
		desc: 'Tech',
	},
	{
		href: '/contacts',
		desc: 'Contact',
	},
	{
		href: '/login',
		desc: 'Account',
	},
	// {
	// 	href: twitterLink,
	// 	desc: 'Twitter',
	// },

];

export default function MenuItems() {
	return (
		<div className={styles.menuItems}>
			{links.map(link => <Item key={link.href} {...link}/>)}
		</div>
	);
}
