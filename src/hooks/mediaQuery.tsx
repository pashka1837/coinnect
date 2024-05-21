import {useEffect, useState} from 'react';
import useStore from '../feature/store';

export default function useMediaQuery() {
	const [isTablet, setDevice] = useState<boolean>(window.innerWidth > 768);
	const {setOpen} = useStore();
	useEffect(() => {
		function changeWith() {
			if (!isTablet && window.innerWidth > 768) {
				setDevice(true);
				setOpen(false);
			}

			if (isTablet && window.innerWidth <= 768) {
				setDevice(false);
			}
		}

		window.addEventListener('resize', changeWith);
		return () => {
			window.removeEventListener('resize', changeWith);
		};
	}, [isTablet]);
	return {isTablet};
}
