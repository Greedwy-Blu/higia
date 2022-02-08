import Link from 'next/link';

import Image from 'next/image';
const  imgicon = require('../assets/zyro-image_2_.ico');
import styles from '../geral.module.scss';
const Navbar: React.FC = () => {
 
   
  
  return (
   
<>
<nav className=" flex bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-none   tracking-wide shadow-md shadow-emerald-300">
  
<a href="#" className="flex justify-start ">
<Image  className="rounded-full mr-4 border-transparent" width={110}    height={100} src={imgicon}alt="description of image"/>

      <span className="self-center text-2xl font-bold whitespace-nowrap text-emerald-900">Higia</span>
  </a>
  <div className="container flex flex-wrap justify-center  items-center mx-auto">
  
 
  <div className="hidden  items-center  w-full md:flex md:w-auto md:order-1 text-base " id="mobile-menu-2">
    <ul className="flex justify-center  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  ">
      <li>
        <a href="#sobre" className="block py-2 pr-4 pl-3 text-teal-800  text-lg font-medium hover:text-emerald-500 active:text-teal-900 " aria-current="page">Sobre</a>
      </li>
      <li>
        <a href="#ComoFunciona" className="block py-2 pr-4 pl-3  text-teal-800  text-lg font-medium  hover:text-emerald-500 active:text-teal-900 ">Como funciona</a>
      </li>
      <li>
        <a href="#ProdutoOforecido" className="block py-2 pr-4 pl-3  text-lg font-medium text-teal-800 hover:text-emerald-500 active:text-teal-900 ">Produto oforecido</a>
      </li>
     
    </ul>
  </div>
  </div>
  <div className="flex  place-items-center">
   <span><Link href="/Login" passHref>
    <h1 className="text-2xl mr-4 text-center align-baseline whitespace-nowrap object-bottom text-teal-800 hover:text-emerald-500 active:text-teal-900 ">Login</h1>
    </Link></span> 
    <Link href="/Create">
    <button className={styles.button +''}>Criar conta</button>
  </Link>
  </div>
</nav>
  </>
  );
}

export default Navbar;