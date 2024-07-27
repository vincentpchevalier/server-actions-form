function Form() {
	return (
		<>
			<h2>Complaint Form</h2>
			<form action="complainFunc" id="complaintform">
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
					<button>File complaint</button>
				</p>
			</form>
		</>
	);
}
export default Form;
