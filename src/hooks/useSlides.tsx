import {useEffect, useState} from 'react';
import {type TechCardData} from '../constants/tech_page_data';
type Props = {
	data: TechCardData[];
};

export default function useSlides({data}: Props) {
	const [slides, setSlides] = useState({
		prev: 0,
		cur: 1,
		next: 2,
	});

	useEffect(() => {
		setTimeout(() => {
			const lastEl = data.length - 1;
			if (slides.prev < lastEl - 2) {
				setSlides({prev: slides.prev + 1, cur: slides.cur + 1, next: slides.next + 1});
			} else {
				setSlides({prev: -2, cur: -1, next: 0});
			}
		}, 2000);
	}, [slides.prev]);
	return {slides};
}
