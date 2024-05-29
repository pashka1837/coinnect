import {useEffect, useState} from 'react';
import useStore from '../feature/store';

export default function useMediaQuery() {
	const [isTablet, setDevice] = useState<boolean>(window.innerWidth >= 768);
	const [isDesk, setDesk] = useState<boolean>(window.innerWidth >= 1200);

	const {setOpen} = useStore();
	useEffect(() => {
		console.log(isTablet, isDesk);
		function changeWith() {
			if (!isTablet && window.innerWidth >= 768) {
				setDevice(true);
				setOpen(false);
			}

			if (isTablet && window.innerWidth < 768) {
				console.log('was tabl, changing to sm');
				setDevice(false);
			}

			if (!isDesk && window.innerWidth >= 1200) {
				setDesk(true);
			}

			if (isDesk && window.innerWidth < 1200) {
				setDesk(false);
			}
		}

		window.addEventListener('resize', changeWith);
		return () => {
			console.log('useeffect');
			window.removeEventListener('resize', changeWith);
		};
	}, [isTablet, isDesk]);
	return {isTablet, isDesk};
}
