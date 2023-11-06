import { Flex } from '@/components/style/Flex'
import React from 'react'
import WritterInfo from './WritterInfo'
import CommentArea from './CommentArea'
import createComment from '@/lib/actions/createComment'
import CommentButton from './CommentButton'

const CommentInputSet = ({ id }: { id: string }) => {
    const createCommentWithId = createComment.bind(null, id);
    
    return (
        <Flex.VStack
            as='form'
            action={createCommentWithId}
            className='lg:justify-between text-sm gap-4 h-24 lg:flex-row'
        >
            <WritterInfo />
            <CommentArea />
            <CommentButton />
        </Flex.VStack>
    )
}

export default CommentInputSet