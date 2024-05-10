import Image from 'next/image'


export default function Page() {
   return(
      <main className="bg-[#D5E1EF] w-screen h-screen flex items-center justify-center">
         <a href="/" className="absolute top-0 left-0">
            back
         </a>
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
 