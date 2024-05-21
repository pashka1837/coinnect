import {type FormEvent} from 'react';

type SubmitFn = (e: FormEvent<HTMLFormElement>) => void;

type InputState = {
	value: string;
	error: string;
};

export type {SubmitFn, InputState};
