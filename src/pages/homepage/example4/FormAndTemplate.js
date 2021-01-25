import React from 'react'
import { useApolloClient, gql } from '@apollo/client';
import TemplateFormAndImg from './template/TemplateFormAndImg'
function FormAndTemplate() {
  const client = useApolloClient()
  const query = gql`
    query MyTodoK {
      state {
        templateOption
      }
  }`
  client.writeQuery({
    query,
    data: {
      state: [{}]
    },
  })
  return (
    <div >
      <TemplateFormAndImg/>
    </div>
  )
}
export default FormAndTemplate
