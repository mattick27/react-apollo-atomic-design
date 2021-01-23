import React from 'react'
import { useApolloClient,gql} from '@apollo/client';
import Typography from './atom/Typography'
import TextInput from './atom/TextInput'
function SubscriptionQuery() {  
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
        <TextInput></TextInput>
    </div>
  )
}
export default SubscriptionQuery
