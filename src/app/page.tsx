import { Flex } from "@/components/style/Flex";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {
  return (
    <>
      <Flex.Center as='article' className="min-h-screen text-black">
        <div className={'font-bold text-3xl'}>main page</div>
      </Flex.Center>
    </>
  )
}
