import { Flex } from "@/components/style/Flex";
import Temp from "@/components/style/Temp";
// import { db } from "./layout";
// import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { ReactNode } from "react";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {

  return (
    <>
      {'블로그 메인'}
      <div>
        {/* <span>{`name : ${docSnap.data.toString()}`}</span> */}
        {/* <span>{`name : ${name}`}</span><br /> */}
        {/* <span>{`age : ${age}`}</span><br /> */}
        <button className="px-[12px] py-[5px] rounded-full bg-blue-500 text-white text-xs border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500">
          {"서버컴포넌트 버튼"}
        </button>
        <Flex.Center as='article'>
          <span>abc</span>
          <span>sdf</span>
        </Flex.Center>
      </div>
    </>
  )
}
