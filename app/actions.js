'use server';
import { redirect } from 'next/navigation';

export async function handleForm(formData) {
	'use server';
	console.log(formData);
	// set to use server
	// get name from form data
	const name = encodeURIComponent(formData.get('studentname'));
	console.log(name);
	const username = encodeURIComponent(formData.get('email').split('@')[0]);
	console.log(username);
	// put it in the url for the redirect to thank you page
	// redirect to thank you page
	redirect(`/thanks?name=${name}&user=${username}`);
}
