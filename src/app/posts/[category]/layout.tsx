import { Flex } from "@/components/style/Flex"

export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex.HCenter className={'w-full'}>
        {children}
    </Flex.HCenter>
  )
}
