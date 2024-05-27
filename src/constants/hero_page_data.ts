import ticketsIMG from '../../raw_assets/images/tickets.png';
import paymentsIMG from '../../raw_assets/images/crypto_payments_noBG.png';
import rewardsIMG from '../../raw_assets/images/rewards.png';

export type CardData = {
	imgSrc: string;
	desc: string;
};

const heroData: CardData[] = [
	{
		imgSrc: ticketsIMG,
		desc: 'Tokenized Tickets',
	},
	{
		imgSrc: paymentsIMG,
		desc: 'Blockchain-Based Payments',
	},
	{
		imgSrc: rewardsIMG,
		desc: 'Incentivized Engagement',
	},
];

export {heroData};
