import Link from "next/link"  
 
 const Footer= () => {
    return ( 
    <footer className="bg-slate-300 text-white  py-6">
<div className="container mx-auto text-center">
  <p className="mb-2">
2024 Mehak Rehman. All right reserved.</p>
<p className="mb-4">contact:info@MehakRehman.com</p>
<div className="flex justify-center space-x-4">
<Link href="/" className=" text-slate-400 hover:text-white font-serif font-bold">facebook</Link>
<Link href="/" className=" text-slate-400 hover:text-white font-serif font-bold">twitter</Link>
<Link href="/" className=" text-slate-400 hover:text-white font-serif font-bold">linkedin</Link>

</div>
</div>
  </footer>

      
      
    );
  }
   export default Footer;