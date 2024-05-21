import {type ChangeEvent} from 'react';
import styles from './MyInput.module.css';
import {type InputState} from '../../types';

type Props = {
	type: string;
	placeHolder: string;
	name?: string;
	setInput: React.Dispatch<React.SetStateAction<{
		value: string;
		error: string;
	}>>;
	inputState: InputState;
};

export default function MyInput({type, inputState, setInput, placeHolder, name}: Props) {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const {value} = e.currentTarget;
		let error = '';
		if (name === 'password' && value.length < 8) {
			error = 'Password too short';
		}

		setInput({error, value});
	}

	return (
		<div>
			{inputState.error && <p className={styles.inputError}>{inputState.error}</p>}
			<input
				onChange={handleChange}
				className={styles.myinput}
				type={type}
				placeholder={placeHolder}
				name={name ?? type}
				required
			/>

		</div>

	);
}
