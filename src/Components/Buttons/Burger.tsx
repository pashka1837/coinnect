import useStore from '../../feature/store';
import {
	closeBurger, openBurger,
} from '../../svgs/svgs';
import styles from './Burger.module.css';

export default function Burger() {
	const {isMenuOpen, setOpen} = useStore();
	return (
		<button
			className={`${styles.burger_btn} ${isMenuOpen ? styles.open : styles.close}`}
			type='button'
			onClick={() => {
				setOpen(!isMenuOpen);
			}}
		>{isMenuOpen ? closeBurger : openBurger}
		</button>
	);
}
