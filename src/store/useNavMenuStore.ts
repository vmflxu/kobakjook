import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export type NavMenu = {
    path: string,
    isOpenSubMenu: boolean,
    openedSubMenu: string[],
    setPath: (path: string) => void;
    addOpenedSubMenu: (path: string) => void,
    removeOpenedSubMenu: (path: string) => void,
    toggleIsOpenSubMenu: () => void,
}

const useNavMenuStore = create<NavMenu>(
    (set) => ({
        path: "",
        openedSubMenu: [],
        isOpenSubMenu: true,
        setPath: (path: string) => set({ path: path }),
        addOpenedSubMenu: (addedPath: string) => set((state) => ({
            openedSubMenu: [...state.openedSubMenu, addedPath],
        })),
        removeOpenedSubMenu: (prevPath: string) => set((state) => ({
            openedSubMenu: state.openedSubMenu.filter(item => item !== prevPath),
        })),
        toggleIsOpenSubMenu: () => set((state) => ({
            isOpenSubMenu: !state.isOpenSubMenu,
        }))
    })
);

export default useNavMenuStore;