import { Flex } from "@/components/style/Flex";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {
  return (
    <>
      <Flex.HCenter as='article' className="w-full min-h-screen text-black pb-16">
        <div className={'font-bold text-3xl'}>main page</div>
      </Flex.HCenter>
    </>
  )
}
