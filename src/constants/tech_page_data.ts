import chainalysisLogo from '../assets/images/tech_companies/Chainalysis.svg';
import solanaLogo from '../assets/images/tech_companies/Solana.svg';
import metamaskLogo from '../assets/images/tech_companies/Metamask.svg';
import polygonLogo from '../assets/images/tech_companies/Polygon.svg';
import solidityLogo from '../assets/images/tech_companies/Solidity.svg';
import phantomLogo from '../assets/images/tech_companies/Phantom.svg';

export type TechCardData = {
	imgSrc: string;
	desc: string;
};

const data: TechCardData[] = [
	{
		imgSrc: solanaLogo,
		desc: 'Solana is our chosen blockchain platform for deploying smart contracts and issuing tokens (SPL tokens for tickets and NFTs).',
	},
	{
		imgSrc: polygonLogo,
		desc: 'Polygon enhances our platform’s scalability and efficiency, allowing for high-speed, low-cost transactions.',
	},
	{
		imgSrc: solidityLogo,
		desc: 'Solidity helps to develop secure and efficient smart contracts. These contracts automate transactions and operations within our platform.',
	},
	{
		imgSrc: phantomLogo,
		desc: 'Phantom is a wallet that allows users to interact with decentralized applications seamlessly.',
	},
	{
		imgSrc: chainalysisLogo,
		desc: 'Chainalysis provides blockchain data and analysis to help monitor and secure our platform against illicit activities.',
	},
	{
		imgSrc: metamaskLogo,
		desc: 'MetaMask integration allows users to connect their wallet effortlessly and execute transactions securely.',
	},
];

export default data;
