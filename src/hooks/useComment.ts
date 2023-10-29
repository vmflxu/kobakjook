import { useState } from "react";

export type CommentInputSetState = {
    writter: string,
    password: string,
    comment: string,
}

const useComment = () => {
    const [comments, setComments] = useState<CommentInputSetState>({
        writter: '',
        password: '',
        comment: '',
    });

    const setCommentValue = (part:Partial<CommentInputSetState>) => {
        setComments({...comments, ...part });
    }

    return { comments, setCommentValue };
}

export default useComment;