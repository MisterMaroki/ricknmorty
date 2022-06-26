import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import imageLoader from '../../imageLoader'
import {
	Location,
	GetCharacterResults,
	GetLocationResults,
	Character,
} from '../../types'
import styles from '../../styles/Home.module.scss'
import { useEffect, useState } from 'react'
import CharacterCard from '../../components/CharacterCard'
import { useStore } from '../../AppStore'
import TimeAgo from 'react-timeago'
function LocationPage({ location }: { location: Location }) {
	console.log(
		'🚀 ~ file: [id].tsx ~ line 18 ~ LocationPage ~ location',
		location
	)
	const [page, setPage] = useState(1)
	const { characters } = useStore()

	const residents = location.residents.map((resident) => {
		return characters.find(
			(x) => x.id === +resident.substring(resident.lastIndexOf('/') + 1)
		)
	}) as Character[]

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>{location.name}</h1>
				<div className={styles.headerImage}></div>
				<div className={styles.locationInfo}>
					<p>
						Created: <TimeAgo date={location.created} />
					</p>
					<p>
						Dimension: <span>{location.dimension}</span>
					</p>
					<p>
						Type: <span>{location.type}</span>
					</p>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.grid}>
					{residents
						?.slice((page - 1) * 20, page * 20)
						.map((character: Character) => (
							<CharacterCard key={character.id} character={character} />
						))}
				</div>
				<button onClick={() => setPage(page - 1)}>Prev page</button>
				<button onClick={() => setPage(page + 1)}>Next page</button>
			</main>
		</div>
	)
}

LocationPage.getLayout = function getLayout(page: typeof LocationPage) {
	return <Layout>{page}</Layout>
}

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
	params: { id: string }
}) {
	const res = await fetch(
		`https://rickandmortyapi.com/api/location/${params.id}`
	)
	const location = await res.json()

	return {
		props: {
			location,
		},
	}
}

export default LocationPage
