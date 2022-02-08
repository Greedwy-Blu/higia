import Link from 'next/link';

import Image from 'next/image';
const  img = require('../assets/ph11.png');

const  imgic = require('../assets/ph12.png');
const  imgi = require('../assets/ph10.png');

const  HigiaInformacao: React.FC = () => {
 
   
  
  return (
   
<>
<div className="bg-teal-100 w-160 shadow-md overflow-hidden rounded-lg ">
<div className="flex flex-row ml-5 pl-5 mt-6  pt-6">

  <div id="sobre" className="box-content   h-70 w-80  border-2 bg-teal-600/50 border-emerald-600  shadow-md hover:shadow-lg shadow-teal-500 ">
<p className="text-2xl text-emerald-700  tracking-tight break-words text-justify indent-8 "> O Higia, ainda proporciona visibilidade aos profissionais que precisam de maior divulgação e ascensão do seu trabalho. 
 Pois, com este website, o portfólio do profissional estará disponível para milhares de potenciais clientes,
 através de filtros que buscam igualdade entre características básicas, pré-cadastrados por ambos usuários. 
  </p> </div>
<Image  className="ml-4  shadow-2xl   " width={400}    height={400} src={img}alt="description of image"/>
 </div>

 <br></br>

  
 <br></br>

  
 <br></br>

  
 <br></br>

  
<div className="flex flex-row-reverse ml-5 pl-5 mr-4 pr-4 ">

<div id="ComoFunciona" className=" box-content  h-80 w-80   border-2 bg-teal-600/50 border-emerald-600 shadow-md hover:shadow-lg shadow-teal-500  ">
<p className="text-2xl text-emerald-700  break-words text-justify indent-8 ">  O aplicativo Higia, surgiu para auxiliar a todas as pessoas que precisam de um profissional de Educacao Fisica,
que possa oferecer a assistência necessária, na busca por melhoria da saude e sendo acessivel para todos tipo de problemas.
</p> </div>

<Image  className="ml-4  shadow-2xl   " width={400}    height={400} src={imgi}alt="description of image"/>

</div>


<div className="flex flex-row   ml-5 pl-5 mb-8 pb-8">

  <div id="ProdutoOforecido" className="box-content   h-90 w-80  border-2 bg-teal-600/50 border-emerald-600  shadow-md hover:shadow-lg shadow-teal-500 ">
<p className="text-2xl text-emerald-700  tracking-tight break-words text-justify indent-8 "> O Higia, ainda proporciona visibilidade aos profissionais que precisam de maior divulgação e ascensão do seu trabalho. 
 Pois, com este website, o portfólio do profissional estará disponível para milhares de potenciais clientes,
 através de filtros que buscam igualdade entre características básicas, pré-cadastrados por ambos usuários. 
  </p> </div>
<Image  className="ml-4  shadow-2xl   " width={400}    height={300} src={imgic}alt="description of image"/>
 </div>
 </div>
  </>
  );
}

export default HigiaInformacao;