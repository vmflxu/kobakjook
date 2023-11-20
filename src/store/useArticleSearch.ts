import { ResPostSchema } from "@/app/writepage/page";
import { create } from "zustand";

export type SearchFilter = '전체' | '타이틀' | '내용' | '태그';
export type SearchBoxState = {
    isTurnOn: boolean,
    selectedFilter: SearchFilter,
    searchWord: string,
    filterList: SearchFilter[],
    searchHistory: string[],
    searchResult: ResPostSchema[],
    toggleVisible: () => void,
    setSearchState: (payload: Partial<SearchBoxState>) => void,
    initState: () => void,
}

export const filterList: SearchFilter[] = ['전체', '타이틀', '내용', '태그'];

const useArticleSearch = create<SearchBoxState>(
    (set) => ({
        isTurnOn: false,
        selectedFilter: '전체',
        searchWord: '',
        filterList,
        searchHistory: [],
        searchResult: [],
        toggleVisible: () => set((state) => ({
            ...state,
            isTurnOn: !state.isTurnOn,
        })),
        setSearchState: (payload: Partial<SearchBoxState>) => set((state) => ({
            ...state,
            ...payload
        })),
        initState: () => set((state) => ({
            ...state,
            isTurnOn: false,
            selectedFilter: '전체',
            searchWord: '',
            filterList,
            searchHistory: [],
            searchResult: [],
        })),
    })
);

export default useArticleSearch;