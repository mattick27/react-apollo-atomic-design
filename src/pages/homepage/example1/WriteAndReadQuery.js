import React from 'react'
import { useApolloClient,gql} from '@apollo/client';
import Typography from './atom/Typography'
function WriteAndReadQuery() {  
  const client = useApolloClient()
  const query = gql`
    query MyTodoK {
      state {
        text 
      }
  }`
  client.writeQuery({
    query,
    data: {
        state : [{
            text : 'hello'
        }]
    },
  })
  return (
    <div >
        <Typography></Typography>
    </div>
  )
}
export default WriteAndReadQuery
