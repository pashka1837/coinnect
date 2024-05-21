import chainalysisLogo from '../assets/images/tech_companies/Chainalysis.svg';
import jumioLogo from '../assets/images/tech_companies/Jumio.svg';
import metamaskLogo from '../assets/images/tech_companies/Metamask.svg';
import polygonLogo from '../assets/images/tech_companies/Polygon.svg';
import solidityLogo from '../assets/images/tech_companies/Solidity.svg';
import tensorLogo from '../assets/images/tech_companies/TensorFlow.svg';

export type TechCardData = {
	imgSrc: string;
	companyLink: string;
	desc: string;
};

const data: TechCardData[] = [

	{
		imgSrc: polygonLogo,
		companyLink: 'https://polygon.technology/',
		desc: 'Our platform integrates with Polygon, a leading Layer 2 scaling solution for Ethereum. Polygon enhances our platform’s scalability and efficiency, allowing for high-speed, low-cost transactions.',
	},
	{
		imgSrc: solidityLogo,
		companyLink: 'https://soliditylang.org/',
		desc: 'We use Solidity to develop secure and efficient smart contracts. These contracts automate transactions and operations within our platform, ensuring transparency and reliability.',
	},
	{
		imgSrc: metamaskLogo,
		companyLink: 'https://metamask.io/',
		desc: 'We support MetaMask, one of the most trusted and widely-used cryptocurrency wallets. MetaMask integration allows users to connect their wallet effortlessly, manage their digital assets, and execute transactions securely.',
	},
	{
		imgSrc: tensorLogo,
		companyLink: 'https://www.tensorflow.org/',
		desc: 'We utilize TensorFlow and PyTorch. It allows us to create sophisticated algorithms that analyze market data, optimize investment portfolios, and provide personalized financial insights.',
	},
	{
		imgSrc: chainalysisLogo,
		companyLink: 'https://www.chainalysis.com/',
		desc: 'For ensuring compliance with Anti-Money Laundering (AML) regulations, we integrate with Chainalysis. This tool provides blockchain data and analysis to help monitor and secure our platform against illicit activities.',
	},
	{
		imgSrc: jumioLogo,
		companyLink: 'https://www.jumio.com/',
		desc: 'Our platform uses Jumio for Know Your Customer (KYC) processes, ensuring we meet regulatory requirements and maintain a secure environment for all users.',
	},
];

export default data;
