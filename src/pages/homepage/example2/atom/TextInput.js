import React from 'react'
import { useApolloClient, gql } from '@apollo/client';

function TextInput() {
  const client = useApolloClient()
  const query = gql`
    query MyTodoK {
      state {
        text 
      }
  }`
  const handleChangeText = (e) => {
    client.writeQuery({
      query,
      data: {
        state: [{
          text: e.target.value
        }]
      }
    })

  }
  return (
    <input onChange={handleChangeText}></input>
  )
}
export default TextInput
