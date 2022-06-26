import create from 'zustand'
import { Character, GetCharacterResults } from './types'
import { devtools, persist } from 'zustand/middleware'
const getCharacterData = async () => {
	let arr = [] as Character[]
	for (let i = 1; i <= 42; i++) {
		const res = await fetch(
			`https://rickandmortyapi.com/api/character/?page=${i}`
		)
		const { results }: GetCharacterResults = await res.json()
		arr.push(...results)
	}
	useStore.setState((state) => ({
		characters: arr.sort((a, b) => a.id - b.id),
	}))
}

getCharacterData()

type State = {
	characters: Character[]
}

const characterStore = () => ({
	characters: [] as Character[],
})

export const useStore = create(
	devtools(persist(characterStore, { name: 'characters' }))
)
