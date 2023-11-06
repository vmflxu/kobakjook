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
            className='h-fit lg:justify-between text-sm gap-4 lg:h-24 lg:flex-row w-full'
        >
            <Flex.HStack className='gap-4 w-full h-[100px] lg:h-full'>
                <WritterInfo />
                <CommentArea />
            </Flex.HStack>
            <CommentButton />
        </Flex.VStack>
    )
}

export default CommentInputSet