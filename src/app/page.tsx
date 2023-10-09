import { Flex } from "@/components/style/Flex";
import Temp from "@/components/style/Temp";

import { ReactNode } from "react";
import { db } from "./layout";
import { collection,getDocs } from "firebase/firestore";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {
  const querySnapshot = await getDocs(collection(db, "Routers"));
  // const temp = querySnapshot.forEach(item => console.log(item));
  // console.log(temp);
  return (
    <>
      {'블로그 메인'}
      <div>
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
