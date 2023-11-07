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
            className='h-fit xl:justify-between text-sm gap-4 xl:h-24 xl:flex-row w-full'
        >
            <Flex.HStack className='gap-4 w-full h-[100px] xl:h-full'>
                <WritterInfo />
                <CommentArea />
            </Flex.HStack>
            <CommentButton />
        </Flex.VStack>
    )
}

export default CommentInputSet