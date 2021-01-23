import React from 'react'
import { useApolloClient, gql } from '@apollo/client';
import SelectInput from './atom/SelectInput'

const handleChainOption = (client,query,selectObj,target,value,functionOption) => {
  let newSelectObj = JSON.parse(JSON.stringify(selectObj))
  newSelectObj[target]['value'] = selectObj[target]['data'][value]['value']
  newSelectObj[target]['option'] = selectObj[target]['data'][value]['option']
  newSelectObj['movie']['selectedValue'] = value
  client.writeQuery({
    query,
    data: {
      state: [{
        selectObj: newSelectObj,
        functionOption : functionOption
      }]
    },
  })
}
function ChainSelect() {
  const client = useApolloClient()
  const query = gql`
    query MyTodoK {
      state {
        selectObj
        functionOption
      }
  }`
  client.writeQuery({
    query,
    data: {
      state: [{
        selectObj: {
          movie: {
            value: ['default', 'spiderman', 'harrypotter'],
            option: ['', 'Spider Man', 'Harry Potter'],
            selectedValue : ['default']
          },
          character: {
            value: [''],
            option: [''],
            data: {
              'default': {
                value: '',
                option: ''
              },
              'spiderman': {
                value: ['peterParker', 'drOctopus'],
                option: ['Peter Parker', 'dr. Octopus'],
              },
              'harrypotter': {
                value: ['harrypotter', 'ronweasley', 'hermionegranger'],
                option: ['Harry Potter', 'Ron Weasley', 'Hermione Granger'],
              }
            },
          }
        },
        functionOption : {
          movie:{
            value : handleChainOption
          },
        }
      }]
    },
  })
  return (
    <div >
      <SelectInput></SelectInput>
    </div>
  )
}
export default ChainSelect
