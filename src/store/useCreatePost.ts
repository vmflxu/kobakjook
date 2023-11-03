import { PostSchema } from "@/app/writepage/page";
import { create } from "zustand";

export type CreatePost = {
    setProperty : (payload:Partial<Omit<PostSchema,"tag">>) => void,
    setTags: (payload:string) => void,
    deleteTag: (payload:string) => void,
    initState : () => void,
} & Omit<PostSchema,"visit">;

const initialState: Omit<PostSchema,"visit"> = {
    title: '',
    path: '',
    content: '',
    modified: false,
    writeAt: 0,
    tags: [],
};

const useCreatePost = create<CreatePost>(
    (set) => ({
        ...initialState,
        setProperty: (payload:Partial<Omit<PostSchema,"tag">>) => set((state) => ({
            ...state, ...payload
        })),
        setTags: (payload:string) => set((state) => ({
            tags: [...state.tags, payload],
        })),
        deleteTag: (payload:string) => set((state) => ({
            tags: state.tags.filter(item => item !== payload),
        })),
        initState: () => set({
            title:'',
            path:'',
            content:'',
            modified:false,
            writeAt:0,
            tags:[],
        }),
    })
);

export default useCreatePost;