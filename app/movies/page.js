import Link from 'next/link';
import MovieCard from '../components/MovieCard';
import styles from '@/app/page.module.css';

const fakedata = [
	{
		id: 1143019,
		title: 'The Infallibles',
		overview:
			'When a gang of robbers provokes chaos in Paris and humiliates the police, the Minister of the Interior wants new blood at the helm of the investigation: Alia is from Marseille, fiery-tempered and unmanageable, Hugo is Parisian, valedictorian and meticulous. In short, they have every reason to hate each other. A forced alliance, for better or for worse, or maybe blossoming into something else?',
		poster_path: '/7PoIAvL3Io5v0HyBliXfXZruQTi.jpg',
	},
	{
		id: 1214509,
		title: 'In a Violent Nature',
		overview:
			'The enigmatic resurrection, rampage, and retribution of an undead monster in a remote wilderness unleashes an iconic new killer after a locket is removed from a collapsed fire tower that entombed its rotting corpse.',
		poster_path: '/hPfWHgq07nXbeldwEGxWB4JqwtE.jpg',
	},
	{
		id: 704673,
		title: 'Trigger Warning',
		overview:
			"A Special Forces commando uncovers a dangerous conspiracy when she returns to her hometown looking for answers into her beloved father's death.",
		poster_path: '/lJN24nn28s5afC1UnLPYRgYOp1K.jpg',
	},
	{
		id: 718821,
		title: 'Twisters',
		overview:
			'As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.',
		poster_path: '/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg',
	},
	{
		id: 821499,
		title: 'The Inheritance',
		overview:
			'Billionaire Charles Abernathy, on the eve of his 75th birthday, invites his four estranged children back home out of fear that tonight someone – or something – is coming to kill him. To ensure his family will help protect him from whatever’s coming, Abernathy puts each of their inheritances on the line – they’ll get nothing if he’s found dead by dawn.',
		poster_path: '/3qQok7BPKVcM0DA9Zu5OeMzzmk6.jpg',
	},
];

async function Movies() {
	let base = process.env.BASE_URL;
	let url = `${base}/movies`;
	let res = await fetch(url);

	let data = await res.json();
	console.log(data);

	// let movies = fakedata.map((movie) => {
	// 	return <MovieCard key={movie.id} movie={movie} />;
	// });
	let movies = data.map((movie) => {
		return <MovieCard key={movie.id} movie={movie} />;
	});

	return (
		<main className={styles.main}>
			<h2>Now Playing</h2>
			<section className={styles.intro}>
				<p>
					The following movies are now showing at a theatre near you. Why
					don&apos;t you go take a break?
				</p>
				<Link className={styles.button} href="/">
					Return to Complain
				</Link>
			</section>
			<section className={styles.movies}>{movies}</section>
		</main>
	);
}
export default Movies;
