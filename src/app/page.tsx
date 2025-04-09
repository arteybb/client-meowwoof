"use client"
import Image from 'next/image';
export default function Home() {
  return (
 <main>
  <nav>
    <div className="logo">
      <h1 className="text-xl">MeowWoof</h1>
    </div>  
  </nav>

   <div className="hand-left absolute">
        <Image
          src="/hand.png" alt={''}  
          width="200"
          height="900"

          ></Image>
    </div>
    <div className="hand-right absolute">
        <Image
          src="/hand.png" alt={''}  
          width="200"
          height="900"

          ></Image>
    </div>

  
      <div className="header w-full h-screen flex flex-col justify-center items-center text-center ">
      <h2 className="text-head-1 text-5xl text-white">จัดการสัตว์เลี้ยง</h2>
      <h2 className="text-head-2 text-6xl text-white mt-3">วัคซีน อาหาร นัดหาหมอ</h2>
      <h2 className="text-head-3 text-3xl text-gray-700 mt-5">ผู้ช่วยคู่ใจสำหรับพ่อแม่สัตว์เลี้ยง</h2>
      <button className="btn-get-started mt-10">
        เริ่มเลย!
      </button>

      
     
   </div>
 </main>
   
   
  );
}
