import { Flex } from "@/components/style/Flex";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {
  return (
    <>
      <Flex.VStack as='article' className="w-full min-h-screen text-black pb-16 gap-16">
        <Flex.Center as='h1' className={'font-bold text-4xl w-full h-[200px] bg-color-base text-color-more-strong'}>안녕하세요! 프론트엔드 개발자 코박죽 블로그에 어서오세요!</Flex.Center>
        <Flex.VStack className='w-full lg:w-[1200px] h-fit mx-auto gap-10'>
          <Flex.Center as='h2' className="w-full font-bold text-3xl text-color-more-strong">
            이 페이지는 아래와 같은 기술로 만들어졌습니다.
          </Flex.Center>
          <Flex.VStack className="gap-8">
            <Flex.VStack>
              <div className="text-2xl font-bold">Framework : Next-JS 14</div>
              <div className="ml-24 w-full">RSC + RCC를 조합하고, 자체 api 및 Server Action을 이용하여 통신하고 Revalidate합니다.</div>
              <div className="ml-24 w-full">이로 인해 기존 Next 12 이하 및 CRA에 비해 구조적으로 복잡해졌으나 오히려 속도는 느려졌습니다.</div>
              <div className="ml-24 w-full">향후 RSC와 서버액션의 속도가 개선될 것이라 기대하며 현상을 유지중입니다.</div>
            </Flex.VStack>
            <Flex.VStack>
              <div className="text-2xl font-bold">DB : MongoDB</div>
              <div className="ml-24 w-full">Indexing을 이용하면 통신속도가 다소 개선될 것으로 기대중입니다.</div>
            </Flex.VStack>
            <Flex.VStack>
              <div className="text-2xl font-bold">No MiddleWare</div>
              <div className="ml-24 w-full">ServerAction을 적극 활용하면서 통신을 위한 통신 미들웨어는 현재까지 사용하지 않고 있습니다.</div>
              <div className="ml-24 w-full">그러나, RSC의 속도가 마음에 들지 않아서 향후 아마도 React-Query를 사용하여 RCC 위주로 개발하지 않을까 생각이 듭니다.</div>
            </Flex.VStack>
          </Flex.VStack>
        </Flex.VStack>
        <Flex.VStack className='w-full lg:w-[1200px] h-fit mx-auto gap-10'>
          <Flex.Center as='h2' className="w-full font-bold text-3xl text-color-more-strong">
            {'향후 개선 계획 - TODO List'}
          </Flex.Center>
          <Flex.VStack className="gap-8">
            <Flex.VStack>
              <div className="text-2xl font-bold">유저인증</div>
              <div className="ml-24 w-full">이 블로그는 포트폴리오 목적도 있기 때문에 현재로서는 로그인없이 아무나 글을 쓸 수 있습니다.</div>
              <div className="ml-24 w-full">향후 게시판을 하나 생성하여 저를 제외한 유저는 CRUD를 따로 해볼수 있는 공간을 만드려고 합니다.</div>
            </Flex.VStack>
            <Flex.VStack>
              <div className="text-2xl font-bold">포스트 검색기능</div>
              <div className="ml-24 w-full">검색 필터에 따라 글을 갖고오는 기능이 추가될 예정입니다.</div>
            </Flex.VStack>
          </Flex.VStack>
        </Flex.VStack>
      </Flex.VStack>
    </>
  )
}
