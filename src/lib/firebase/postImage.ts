
import { auth, storage } from "@/values/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const postImage = async (file: File) => {
    const path = `article/${Date.now()}`;
    const articleRef = ref(storage, path);
    let result = '';
    // console.log(articleRef.root);
    await uploadBytes(articleRef, file)
        .then(snapshot => {
            console.log('Upload to Firestore is completed');
            getDownloadURL(articleRef).then(url => result = url);
        })
        .catch(err => {
            console.log(err.message)
            result = 'failed'
        });

    return result;
};

export default postImage;