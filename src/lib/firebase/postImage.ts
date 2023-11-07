
import { auth, storage } from "@/values/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const postImage = async (file: File) => {
    const path = `article/${Date.now()}`;
    const articleRef = ref(storage, path);
    
    await uploadBytes(articleRef, file);
    const result = await getDownloadURL(articleRef);

    return result;
};

export default postImage;