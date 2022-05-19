import { useRouter } from 'next/router';
import React from 'react'

function Docs() {
   let route= useRouter();
   let {params = []} = route.query;
 console.log(params);
   if(params.length ==2){
       return(
           <>
           it has two param{params[0]}/{params[1]}
           </>
       );
   }
   else if(params.length == 1){
    return(
        <>
        it has one param{params[0]}
        </>
    );
   }
   
  return (
    <div>
        

      Doc home Page
    </div>
  )
}

export default Docs;
