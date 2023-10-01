import Temp from "@/components/style/Temp";
// import { db } from "./layout";
// import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { ReactNode } from "react";

type TempData = {
  name: string,
  age: number,
}

export default async function MainSection() {
  // const testRef = collection(db, "temp");
  // const docTest = doc(testRef, "profile");
  // const docSnap = await getDoc(docTest);
  // const { name, age } = docSnap.data() as TempData;
  // console.log('dd', docSnap);

  // if (docSnap.exists()) {
  //   console.log("docSnap 존재함", docSnap.data());
  // } else {
  //   console.log("존재안함");
  // }

  return (
    <>
      {'메인 컨텐츠'}
      <div>
        {/* <span>{`name : ${docSnap.data.toString()}`}</span> */}
        {/* <span>{`name : ${name}`}</span><br /> */}
        {/* <span>{`age : ${age}`}</span><br /> */}
        <button
          // onClick={ }
          className="px-[12px] py-[5px] rounded-full bg-blue-500 text-white text-xs border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500">{"버튼을 누르면"}</button>
      </div>
    </>
  )
}
