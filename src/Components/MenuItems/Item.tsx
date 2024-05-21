import {NavLink} from 'react-router-dom';
import useStore from '../../feature/store';
import {type MyLink} from './MenuItems';
import styles from './MenuItems.module.css';

export default function Item({href, desc, svg}: MyLink) {
	const {setOpen} = useStore();
	return (
		<NavLink
			className={({isActive}) =>
				`${styles.menuLink} ${isActive ? styles.current : ''}`
			  }
			onClick={() => {
				setOpen(false);
			}}
			to={href}>
			<span>{desc}</span>
			<span>{svg}</span>
		</NavLink>
	);
}
