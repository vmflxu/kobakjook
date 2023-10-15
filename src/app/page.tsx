import { Flex } from "@/components/style/Flex";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {
  return (
    <>
      <Flex.Center as='article' className="min-h-screen">
        <div className={'font-bold text-3xl'}>블로그 메인 페이지 컨텐츠</div>
      </Flex.Center>
    </>
  )
}
