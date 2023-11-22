import { Line } from '@/components/common/Line'
import { Flex } from '@/components/style/Flex'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import React from 'react'

type PageParams = {
    pages: string,
}
const page = ({ params }: { params: PageParams }) => {
    return (
        <Flex.VStack as='article' className="w-full min-h-screen text-black pb-16 gap-16">
            <Flex.Center as='h1' className={'font-bold text-5xl w-full h-[200px] bg-color-base text-color-more-strong'}>About 코박죽</Flex.Center>
            <Flex.VStack className='w-full lg:w-[1200px] h-fit mx-auto gap-20'>
                <Flex.Center as='h2' className="w-full font-bold text-4xl text-color-more-strong">
                    제조업 PM에서 프론트엔드 개발자까지 여정
                </Flex.Center>
                <Flex.VStack className="gap-8">
                    <Flex.VStack>
                        <div className="text-2xl font-bold">제조업에서 PM 역할</div>
                        <div className="ml-24 w-full">제조업은 보통 품질 엔지니어가 PM 역할을 하며 Waterfall 방식의 프로젝트를 이끌어갑니다.</div>
                        <div className="ml-24 w-full">품질 엔지니어로서 ISO-9000/14001/45001, KS/JIS 등의 인증심사 담당자를 맡았습니다. </div>
                        <div className="ml-24 w-full">{"철강업에서 주요 글로벌 에너지업체(Linde) 및 국내 대기업상사(삼성ENG, 삼성물산 등)의 Oil/Gas Pipeline Project를 담당하였습니다."}</div>
                        <div className="ml-24 w-full">또한 이후 건축제조업에서 이동식주택의 자재조달부터 제조, 제품배송까지 PM 및 품질관리를 했으며</div>
                        <div className="ml-24 w-full">기계 및 기구설계, 건축설계 등의 CAD/CAM 작업을 겸임했습니다.</div>
                    </Flex.VStack>
                    <Flex.VStack>
                        <div className="text-2xl font-bold">개발자로의 직무전환</div>
                        <div className="ml-24 w-full">건축제조업은 작은 회사였는데요, 작은 회사의 특성상 한명이 여러가지 일을 하게 되는 경우가 많습니다.</div>
                        <div className="ml-24 w-full">자사 홈페이지가 필요한데, 창사 초기에 비용이 너무 많이 드니까 제가 직접 만드는 것을 제안하여 개발을 시작합니다.</div>
                        <div className="ml-24 w-full">대학생 시절부터 개발을 좋아하여, 취미로 COCOS-2DX 엔진을 활용하여 폰게임을 만들고, 여러가지 새로운 언어들을 찍먹해왔기에</div>
                        <div className="ml-24 w-full">크게 어렵지 않게 전환을 했습니다. 이때는 바닐라JS로 개발을 시작했습니다.</div>
                    </Flex.VStack>
                    <Flex.VStack>
                        <div className="text-2xl font-bold">현재</div>
                        <div className="ml-24 w-full">건축제조업이었던 회사가 코로나로 인해서 폐업을 하게 되었고, 저는 이후 계속 프리랜서 활동을 하고 있습니다.</div>
                        <div className="ml-24 w-full">유저의 사용성이 사업과 시장경쟁에 끼칠 영향을 중요하게 여기며, 이 부분에 대해서 고민을 많이 하는 개발자입니다.</div>
                        <div className="ml-24 w-full">시간이 흘러 어떤 개발자가 유지보수를 담당하더라도 바로 투입가능한 코드를 중요하게 생각합니다.</div>
                    </Flex.VStack>
                </Flex.VStack>
            </Flex.VStack>
            <Line.Helical color='gray' degree={400} />
            <Flex.VStack className='w-full lg:w-[1200px] h-fit mx-auto gap-20'>
                <Flex.Center as='h2' className="w-full font-bold text-4xl text-color-more-strong">
                    기술스택
                </Flex.Center>
                <Flex.VStack className="gap-16">
                    <Flex.VStack>
                        <div className="text-2xl font-bold">바닐라JS, React, NextJS, JQuery</div>
                        <div className="ml-24 w-full">SSR, RSC, ServerAction 등을 활용한 프로젝트설계</div>
                        <div className="ml-24 w-full">바닐라 또는 JQuery를 이용한 웹페이지 구성도 물론 가능합니다.</div>
                    </Flex.VStack>
                    <Flex.VStack>
                        <div className="text-2xl font-bold">Redux, Zustand, Redux-toolkit, Recoil</div>
                        <div className="ml-24 w-full">상태관리 툴은 전반적으로 다 사용 가능합니다.</div>
                    </Flex.VStack>
                    <Flex.VStack>
                        <div className="text-2xl font-bold">Tanstack-Query, Redux-Toolkit-Thunk</div>
                        <div className="ml-24 w-full">통신 미들웨어를 코드 재사용성에 맞춰 추상화하여 프로젝트를 구성합니다.</div>
                    </Flex.VStack>
                    <Flex.VStack>
                        <div className="text-2xl font-bold">Tailwind CSS, Styled-Component, Emotion, Chakra UI, 반응형 UI</div>
                        <div className="ml-24 w-full">사전정의 방식부터 CSS-In-JS 방식까지 재사용성을 고려한 컴포넌트 구성, 동적스타일링</div>
                    </Flex.VStack>
                    <Flex.VStack>
                        <div className="text-2xl font-bold">Weg 3.0</div>
                        <div className="ml-24 w-full">Backend의 Smart Contract를 이용한 Transaction 발생 및 지갑 후처리</div>
                        <div className="ml-24 w-full">Transaction의 후처리에 따른 api 서버와의 상태일치 등 </div>
                    </Flex.VStack>
                </Flex.VStack>
            </Flex.VStack>
            <Line.Helical color='gray' degree={400} />
            <Flex.VStack className='w-full lg:w-[1200px] h-fit mx-auto gap-20'>
                <Flex.Center as='h2' className="w-full font-bold text-4xl text-color-more-strong">
                    Contact
                </Flex.Center>
                <Flex.VStack className="gap-16">
                    <Flex.VStack>
                        <div className="text-2xl font-bold">E-mail : vmflxu@gmail.com</div>
                        <div className="text-2xl font-bold">
                            Github :
                            <Link href={'https://github.com/vmflxu/kobakjook'}> https://github.com/vmflxu/kobakjook</Link>
                            {'(블로그의 레포지토리입니다.)'}
                        </div>
                        <div className="text-2xl font-bold mt-8">현재 프리랜서로서, 외주 문의 가능합니다 편하게 연락주세요!</div>
                        <div className="text-2xl font-bold">혹은 기업문화가 좋은 일자리가 있다면 문의 기다리고 있습니다!</div>
                    </Flex.VStack>
                </Flex.VStack>
            </Flex.VStack>
        </Flex.VStack>
    )
}

export default page