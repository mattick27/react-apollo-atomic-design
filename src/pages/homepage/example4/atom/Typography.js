import React from 'react'
import { useApolloClient,gql} from '@apollo/client';

function Typography({text}) {  

  if(text){
    return (
        <p>{text}</p>
      )    
  }else{
      return (<p> <br/></p>)
  }
}
export default Typography
