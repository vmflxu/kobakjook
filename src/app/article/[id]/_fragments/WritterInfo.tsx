import { Flex } from '@/components/style/Flex'
import InputModule from '@/components/style/InputModule'
import { CommentInputSetState } from '@/hooks/useComment'
import React from 'react'

const WritterInfo = ({
    comments,
    setCommentValue
}: {
    comments: CommentInputSetState,
    setCommentValue: (part: Partial<CommentInputSetState>) => void,
}) => {
    const writterChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentValue({
            writter: e.currentTarget.value,
        });
    }
    const pwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentValue({
            password: e.currentTarget.value,
        });
    }
    return (
        <Flex.VStack className='gap-2'>
            <Flex.VStack className='w-full'>
                <label>작성자</label>
                <input
                    type='text'
                    className='w-full border'
                    value={comments.writter}
                    onChange={writterChangeHandler} />
            </Flex.VStack>
            <Flex.VStack className='w-full'>
                <label>비밀번호</label>
                <input
                    type='password'
                    className='w-full border'
                    value={comments.password}
                    onChange={pwChangeHandler} />
            </Flex.VStack>
        </Flex.VStack>
    )
}

export default WritterInfo