import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export type NavMenu = {
    path: string,
    openedSubMenu: string[],
    setPath: (path: string) => void;
    addOpenedSubMenu: (path: string) => void,
    removeOpenedSubMenu: (path: string) => void,
}

const useNavMenuStore = create<NavMenu>(
    (set) => ({
        path: "",
        openedSubMenu: [],
        setPath: (path: string) => set({ path: path }),
        addOpenedSubMenu: (addedPath: string) => set((state) => ({
            openedSubMenu: [...state.openedSubMenu, addedPath],
        })),
        removeOpenedSubMenu: (prevPath: string) => set((state) => ({
            openedSubMenu: state.openedSubMenu.filter(item => item !== prevPath),
        }))
    })
);

export default useNavMenuStore;