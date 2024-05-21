import styles from './Navbar.module.css';
import logo from '../../assets/logo.webp';
import Burger from '../Buttons/Burger';
import MenuItems from '../MenuItems/MenuItems';
import useMediaQuery from '../../hooks/mediaQuery';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

export default function Navbar() {
	const {isTablet} = useMediaQuery();
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.logo_container} role='button'>
					<img className={styles.logo_img} src={logo} alt='logo' />
					<p className={styles.logo_text}>Wellnes LAB</p>
				</div>
				{isTablet && <MenuItems />}
				{!isTablet && <Burger />}
			</div>
			 {!isTablet && <DropDownMenu />}
		</>

	);
}

