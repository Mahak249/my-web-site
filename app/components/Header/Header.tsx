
import Link from "next/link"
const Header = () => {
 return (
  <header className="bg-slate-300 p-4 flex items-center justify-between">
<div className="flex item-center ">

<span className="text-white text-4xl font-bold font-serif">
  My Web-Site
</span>
</div>  
<div className="sapce-x-4">
  <Link href="/home" className="text-white hover:text-slate-400 font-extrabold  font-serif text-xl"> Home
  </Link>
  <Link href="/about" className="text-white hover:text-slate-400 font-extrabold font-serif text-xl"> About
  </Link>
  <Link href="/contact" className="text-white hover:text-slate-400  font-extrabold font-serif text-xl"> Contact
  </Link>
  <Link href="/service" className="text-white hover:text-slate-400  font-extrabold font-serif text-xl "> Service
  </Link>
  </div>
</header>
 );
};

export default Header;