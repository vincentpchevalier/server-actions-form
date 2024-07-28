import styles from './page.module.css';
import Form from './components/Form';
import MoviesButton from './components/MoviesButton';

export default function Home() {
	return (
		<main className={styles.main}>
			<Form />
			<MoviesButton />
		</main>
	);
}
