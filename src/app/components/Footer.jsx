import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
   <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div className="container p-12 flex justify-between">
        <span> <Image
   src="/images/logo.jpg"
   alt ="hero"
   className="rounded-full object cover"
   width={50}
   height={50}
   />
   </span>

   <p className='text-slate-600'><a href="https://www.linkedin.com/in/macdonald-sairos-8b1686186/" className="text-slate-600 hover:text-white transition-colors">
          Miccs Web Development &copy; 2024
          </a></p>
   <div>
        <p className="text-slate-600">All Rights Reserved.</p>
        </div>
   </div></footer>
  )
}

export default Footer