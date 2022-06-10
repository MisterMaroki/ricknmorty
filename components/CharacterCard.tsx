import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import imageLoader from '../imageLoader';
import styles from '../styles/Home.module.scss';
import { Character } from '../types';

const CharacterCard = ({ character }: { character: Character }) => {
	const lastSeenUrl = character.location.url;
	const lastSeenIndex = lastSeenUrl.lastIndexOf('/');
	const lastSeen = lastSeenUrl.substr(lastSeenIndex);
	const originUrl = character.origin.url;
	const originIndex = originUrl.lastIndexOf('/');
	const origin = originUrl ? `/locations${originUrl.substr(originIndex)}` : '/';

	return (
		<article className={styles.card}>
			<div className={styles['image-wrapper']}>
				<Image
					loader={imageLoader}
					unoptimized
					src={character.image}
					alt={character.name}
					layout="fill"
				/>
			</div>
			<div className={styles['content-wrapper']}>
				<div className={styles.section}>
					<Link href={`/characters/${character.id}`}>
						<a className={styles.link}>
							<h3>{character.name}</h3>
						</a>
					</Link>
					<span className={styles.status}>
						<span
							className={styles.status__icon}
							style={{
								backgroundColor:
									character.status.toLowerCase() === 'alive'
										? 'rgb(85, 204, 68)'
										: 'rgb(214, 61, 46)',
							}}
						></span>{' '}
						{character.status} - {character.species}
					</span>
				</div>

				<div className={styles.section}>
					<span className={'text-gray'}>Last known location:</span>
					<Link href={`/locations${lastSeen}`}>
						<a className={styles.link}>{character.location.name}</a>
					</Link>
				</div>
				<div className={styles.section}>
					<span className={'text-gray'}>First seen in:</span>
					<Link href={origin}>
						<a className={styles.link}>{character.origin.name}</a>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default CharacterCard;
