import { Flex } from '@/components/style/Flex'
import React from 'react'
import WritterInfo from './WritterInfo'
import CommentArea from './CommentArea'
import createComment from '@/lib/actions/createComment'
import CommentButton from './CommentButton'

const CommentInputSet = ({ id }: { id: string }) => {
    const createCommentWithId = createComment.bind(null, id);
    return (
        <Flex.HStack
            as='form'
            action={createCommentWithId}
            className='justify-between text-sm gap-4 h-24'
        >
            <WritterInfo />
            <CommentArea />
            <CommentButton />
        </Flex.HStack>
    )
}

export default CommentInputSet