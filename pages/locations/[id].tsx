import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import imageLoader from '../../imageLoader';
import { Location, GetCharacterResults, GetLocationResults } from '../../types';
import styles from '../../styles/Character.module.scss';

function LocationPage({ location }: { location: Location }) {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<h1>{location.name}</h1>
		</div>
	);
}

LocationPage.getLayout = function getLayout(page: typeof LocationPage) {
	return <Layout>{page}</Layout>;
};

// export async function getServerSidePaths() {
// 	const res = await fetch('https://rickandmortyapi.com/api/location');
// 	const { results }: GetLocationResults = await res.json();

// 	return {
// 		paths: results.map((location) => {
// 			return { params: { id: String(location.id) } };
// 		}),
// 		fallback: false,
// 	};
// }

export async function getServerSideProps({
	params,
}: {
	params: { id: string };
}) {
	const res = await fetch(
		`https://rickandmortyapi.com/api/location/${params.id}`
	);
	const location = await res.json();

	return {
		props: {
			location,
		},
	};
}

export default LocationPage;
