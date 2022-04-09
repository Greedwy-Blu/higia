
import { usePerfilQuery } from '../../graphql/generated/graphql';
import React from 'react';
const WithAuth = () => {
 
    const {client,  data, loading } = usePerfilQuery()
    
    
    
  return(

    <div>
    {(() => {
        if(loading) return <p>Loading...</p>;
        if(!data?.perfil?.id){
            return(
                <div>
                <div>Porfavor faça o login</div>
                </div>
            )
        } 
    })()}
  </div>
  )
}
  
  export default WithAuth;