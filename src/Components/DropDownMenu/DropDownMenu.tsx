import useStore from '../../feature/store';
import MenuItems from '../MenuItems/MenuItems';
import styles from './DropDownMenu.module.css';

export default function DropDownMenu() {
	const {isMenuOpen} = useStore();

	return (
		<div
			className={`${styles.mobile_menu} ${isMenuOpen ? styles.open : ''}`}>
			<MenuItems />
		</div>
	);
}
