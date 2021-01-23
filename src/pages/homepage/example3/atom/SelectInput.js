import React from 'react'
import { useApolloClient, gql } from '@apollo/client';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SelectInput() {
  const client = useApolloClient()
  const [selectObj, setSelectObj] = React.useState('')
  const [handleFunction , setHandleFunction] = React.useState()
  const query = gql`
    query MyTodoK {
      state {
        selectObj
        functionOption
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    setSelectObj(obj['data']['state']['0']['selectObj'])
    setHandleFunction(obj['data']['state']['0']['functionOption'])
  })

  if (selectObj && handleFunction) {
    return (
      <div >
        {Object.keys(selectObj).map((keys) => {
          return (
            <Select onChange={(e) => {
              if(handleFunction[keys]?.value){
                handleFunction[keys].value(client, query, selectObj, 'character', e.target.value ,handleFunction )
              }
            }} key={keys} value={selectObj[keys]['selectedValue']}>
              {selectObj[keys]['option'].map((optionValue, idx) => {
                return (
                  <MenuItem key={optionValue} value={selectObj[keys]['value'][idx]}>{optionValue}</MenuItem>
                )
              })}
            </Select>
          )
        })}
      </div>
    )
  } else {
    return <div></div>
  }
}
export default SelectInput
