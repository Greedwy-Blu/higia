import Link from 'next/link';
import Image from 'next/image';
const  img = require('../assets/ph8.png');
import styles from '../geral.module.scss';
const Higiacorpo: React.FC = () => {
 
   
  
  return (
   
<>
<div className="container flex flex-row-reverse justify-center items-center">
<Image  className="float-right translate-y-6 mx-8 origin-top-left shadow-md  md:transform-none " width={400}    height={600} src={img}alt="description of image"/>
<p className="content-center break-all">
<h1 className='  text-3xl text-emerald-900'>Disposição para a Sáude</h1>
<h5 className='  text-xl text-emerald-900'>Sempre pensando na sua  saúde e a melhor forma de  encontrar profissionais de qualidade</h5>
</p>
</div>

  </>
  );
}

export default Higiacorpo;