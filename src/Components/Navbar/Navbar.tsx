import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import Burger from '../Burger/Burger';
import MenuItems from '../MenuItems/MenuItems';
import useMediaQuery from '../../hooks/mediaQuery';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

export default function Navbar() {
	const {isTablet} = useMediaQuery();
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.logo_container} >
					<img className={styles.logo_img} src={logo} alt='logo' />
					<p className={styles.logo_text}>Coinnect</p>
				</div>
				{isTablet && <MenuItems />}
				{!isTablet && <Burger />}
			</div>
			 {!isTablet && <DropDownMenu />}
		</>

	);
}

