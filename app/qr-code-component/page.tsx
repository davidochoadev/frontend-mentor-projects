import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaHouse, FaSquareGithub } from "react-icons/fa6";


export default function Page() {
   return (
      <main className="bg-[#D5E1EF] w-screen h-screen flex items-center justify-center">
         <div className="absolute bottom-0 left-1/2 mb-2 -translate-x-1/2 bg-[#181f2b] p-4 rounded-full opacity-70 flex flex-row gap-4">
            <Link href="/">
               <FaHouse />
            </Link>
            <a href="https://www.linkedin.com/in/davidochoadev/" target='_blank' rel='noreferrer'>
               <FaLinkedin />
            </a>
            <a href="https://github.com/davidochoadev/frontend-mentor-projects/tree/main/app/qr-code-component" target='_blank' rel='noreferrer'>
               <FaSquareGithub />
            </a>
         </div>

         <div className="bg-white w-[320px] h-[497px] rounded-[20px] drop-shadow-xl flex flex-col items-center mx-[28px] p-[16px]">
            <Image
               src="/image-qr-code.png"
               width={288}
               height={288}
               alt="QR Code Front-end Mentor"
               className="bg-blue-500 w-[288px] h-[288px] mx-[16px] mb-[16px] rounded-[10px]"
            />
            <div className='mt-[8px] flex flex-col items-center justify-center'>
               <h1 className=' font-bold text-[#1F314F] text-center text-[22px] max-h-[56px] max-w-[288px] leading-tight'>
                  Improve your front-end skills by building projects
               </h1>
               <p className='text-[15px] text-[#7D889E] text-center mt-[16px] leading-snug max-w-[256px]'>
                  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
               </p>
            </div>
         </div>
      </main>

   );
}
