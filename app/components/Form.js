'use client';

import { handleForm } from '@/app/actions';
import MoviesButton from './MoviesButton';

import styles from '@/app/page.module.css';

function Form() {
	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log('getting form data');
		console.log(formData);

		if (localStorage.getItem('tally') >= 1) {
			let tally = localStorage.getItem('tally');
			tally++;
			localStorage.setItem('tally', tally);
		} else {
			localStorage.setItem('tally', 1);
		}

		handleForm(formData);
	}

	return (
		<>
			<h2>Complaint Form</h2>
			<form
				id="complaintform"
				className={styles.complaintform}
				action={handleForm}
			>
				<p>
					<label htmlFor="studentname">Student Name</label>
					<input type="text" name="studentname" />
				</p>
				<p>
					<label htmlFor="email">Email</label>
					<input type="text" name="email" />
				</p>
				<p>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						placeholder="Write your message"
					></textarea>
				</p>
				<p>
					<button className={styles.button}>File complaint</button>
					<MoviesButton />
				</p>
			</form>
		</>
	);
}
export default Form;
