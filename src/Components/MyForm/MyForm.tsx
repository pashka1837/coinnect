import {Form} from 'react-router-dom';
import styles from './MyForm.module.css';
import {type SubmitFn} from '../../types';

type Props = {
	children: string | JSX.Element | JSX.Element[];
	handleSubmit: SubmitFn;
	formName: string;
	submitBtnName: string;
	extraBtnName: string;
	ifLogedin: string;
	navigateTo: string;
	isDisable: boolean;
};

export default function MyForm({children, handleSubmit, isDisable, navigateTo, formName, submitBtnName, extraBtnName, ifLogedin}: Props) {
	return (
		<Form className={styles.myForm} onSubmit={handleSubmit}>
			<h3 className={styles.form_name}>{formName}</h3>
			{children}
			<div className={styles.btn_container}>
				<button disabled={isDisable} className={` btn ${styles.submit_btn}`} type='submit'>{submitBtnName}</button>
				<p className={styles.ifLogedIn}>{ifLogedin} <a className={`${styles.extra_link}`} href={navigateTo}>{extraBtnName}</a></p>
			</div>
		</Form>
	);
}
