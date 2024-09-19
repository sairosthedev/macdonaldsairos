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
   <p className="text-slate-600">All Rights Reserved.</p>
   </div></footer>
  )
}

export default Footer