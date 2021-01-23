import React from 'react'
import { useApolloClient,gql} from '@apollo/client';

function Typography() {  
  const client = useApolloClient()
  const query = gql`
    query MyTodoK {
      state {
        text 
      }
  }`
  let data = client.readQuery({query})
  if(data){
    return (
        <p>{data['state']['0']['text']}</p>
      )    
  }else{
      return (<div></div>)
  }
}
export default Typography
