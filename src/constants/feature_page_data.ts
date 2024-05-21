import data_bro_img from '../assets/images/cards/data-extraction-bro.svg';
import perfor_over_img from '../assets/images/cards/performance-overview-bro.svg';
import nfr_for_all_img from '../assets/images/cards/NFT-amico.svg';
import cross_platform_img from '../assets/images/cards/cross-platform-software-amico.svg';

export type CardData = {
	imgSrc: string;
	desc: string;
};

const data: CardData[] = [
	{
		imgSrc: data_bro_img,
		desc: 'Our AI manager analyzes your assets, risk tolerance, and investment goals to provide tailored recommendations that help you optimize your portfolio and maximize returns in the dynamic crypto and NFT markets.',
	},
	{
		imgSrc: perfor_over_img,
		desc: 'Stay ahead of the curve with access to real-time market analysis and insights. Our advanced machine learning algorithms continuously monitor market trends and news, providing you with timely information to make informed investment decisions.',
	},
	{
		imgSrc: nfr_for_all_img,
		desc: 'Discover the best deals and investment opportunities in the crypto and NFT markets. Our AI manager identifies high-potential opportunities based on your preferences and risk profile, helping you capitalize on market fluctuations and emerging trends.',
	},
	{
		imgSrc: cross_platform_img,
		desc: 'Trust in our platform\'s security and reliability. We prioritize the safety of your assets with robust encryption and data protection measures, ensuring that your financial information remains confidential and secure.',
	},
];

// Const data: CardData[] = [
// 	{
// 		imgSrc: data_bro_img,
// 		desc: 'Our platform leverages state-of-the-art artificial intelligence to deliver unparalleled insights and performance.',
// 	},
// 	{
// 		imgSrc: perfor_over_img,
// 		desc: 'Backed by a team of finance, technology, and data science experts, we are committed to helping you achieve your financial goals.',
// 	},
// 	{
// 		imgSrc: nfr_for_all_img,
// 		desc: 'Our platform is designed with user experience in mind. Whether you\'re a seasoned investor or new to the crypto and NFT markets, our intuitive interface makes it easier.',
// 	},
// 	{
// 		imgSrc: cross_platform_img,
// 		desc: 'We regularly update and enhance our platform with new features and functionalities, ensuring that you have access to the latest tools and technologies.',
// 	},
// ];

export default data;
