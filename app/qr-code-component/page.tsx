import Image from 'next/image'
import Link from 'next/link'


export default function Page() {
   return (
      <main className="bg-[#D5E1EF] w-screen h-screen flex items-center justify-center">
         <div className="absolute bottom-0 left-1/2 mb-2 -translate-x-1/2 bg-[#181f2b] p-4 rounded-full opacity-70">
            <Link href="/">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
               </svg>
            </Link>
         </div>

         <div className="bg-white w-[320px] h-[497px] rounded-[20px] drop-shadow-xl flex flex-col items-center mx-[28px] p-[16px]">
            <Image
               src="/image-qr-code.png"
               width={288}
               height={288}
               alt="QR Code Front-end Mentor"
               className="bg-blue-500 w-[288px] h-[288px] mx-[16px] mb-[16px] rounded-[10px]"
            />
            <div className='mx-[16px] mt-[8px]'>
               <h1 className=' font-bold text-[#1F314F] text-center text-base max-h-[56px] max-w-[288px] leading-tight'>
                  Improve your front-end skills by building projects
               </h1>
               <p className='text-[0.70rem] text-[#7D889E] text-center mt-[16px] leading-snug max-w-[256px]'>
                  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
               </p>
            </div>
         </div>
      </main>

   );
}
