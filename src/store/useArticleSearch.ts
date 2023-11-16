import { create } from "zustand";

export type SearchFilter = '전체' | '타이틀' | '내용' | '태그';
export type SearchBoxState = {
    isTurnOn: boolean,
    selectedFilter: SearchFilter,
    searchWord: string,
    filterList: SearchFilter[],
    toggleVisible: () => void,
    setSearchState: (payload: Partial<SearchBoxState>) => void,
}

export const filterList: SearchFilter[] = ['전체', '타이틀', '내용', '태그'];

const useArticleSearch = create<SearchBoxState>(
    (set) => ({
        isTurnOn: false,
        selectedFilter: '전체',
        searchWord: '',
        filterList,
        toggleVisible: () => set((state) => ({
            ...state,
            isTurnOn: !state.isTurnOn,
        })),
        setSearchState: (payload: Partial<SearchBoxState>) => set((state) => ({
            ...state,
            ...payload
        })),
    })
);

export default useArticleSearch;