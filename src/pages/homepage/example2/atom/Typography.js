import React from 'react'
import { useApolloClient,gql} from '@apollo/client';

function Typography() {  
  const client = useApolloClient()
  const [text,setText] = React.useState('')
  const query = gql`
    query MyTodoK {
      state {
        text 
      }
  }`
  client.watchQuery({query}).subscribe((obj)=>{
    setText(`${obj['data']['state']['0']['text']}`)
  })

  if(text){
    return (
        <p>{text}</p>
      )    
  }else{
      return (<p> <br/></p>)
  }
}
export default Typography
