import { CommentInputSetState } from '@/hooks/useComment'
import React from 'react'

const CommentArea = ({
    // comments,
    // setCommentValue
}: {
    // comments: CommentInputSetState,
    // setCommentValue: (part: Partial<CommentInputSetState>) => void,
}) => {
    return (
        <textarea
            placeholder='댓글을 입력해주세요.'
            className='w-full flex-1 h-full border p-4 resize-none'
            name='comment'
            maxLength={300}
            wrap='hard'
            required
            // value={comments.comment}
            // onChange={e=>{}}
        />
        // <textarea
        //     placeholder='댓글을 입력해주세요.'
        //     className='w-full flex-1 h-full border p-4 resize-none'
        //     maxLength={300}
        //     wrap='hard'
        //     required
        //     value={comments.comment}
        //     onChange={e=>{}}
        // />
    )
}

export default CommentArea