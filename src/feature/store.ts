import {create} from 'zustand';

type Store = {
	isMenuOpen: boolean;
	isEmailSent: boolean;
	setEmail: (setVal: boolean) => void;
	setOpen: (setVal: boolean) => void;
};

const useStore = create<Store>()(set => ({
	isMenuOpen: false,
	isEmailSent: Boolean(localStorage.getItem('isEmailSent')),
	setOpen(setVal) {
		set(() => ({isMenuOpen: setVal}));
	},
	setEmail(setVal) {
		set(() => {
			localStorage.setItem('isEmailSent', 'yes');
			return ({isEmailSent: setVal});
		});
	},

}));

export default useStore;
