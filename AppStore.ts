import create from 'zustand';
import { Character, GetCharacterResults } from './types';

type State = {
	characters: Character[];
	fetchCharacters: (page: number) => void;
};

export const useStore = create<State>()((set) => ({
	characters: [],
	fetchCharacters: async (page) => {
		const res = await fetch(
			`https://rickandmortyapi.com/api/character/?page=${page}`
		);
		const { results }: GetCharacterResults = await res.json();

		set((state) => ({ characters: state.characters.concat(...results) }));
	},
}));
