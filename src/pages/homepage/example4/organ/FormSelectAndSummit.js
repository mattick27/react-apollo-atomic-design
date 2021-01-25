import React from 'react'
import { useApolloClient,gql} from '@apollo/client';
import SelectInputAndText from '../molecule/SelectInputAndText'

function FormSelectAndSummit() {  
  const [selectObj, setSelectObj] = React.useState()

  const query = gql`
    query MyTodoK {
      state {
        organ
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    setSelectObj(obj['data']['state']['0']['organ']['FormSelectAndSummit'])
  })

  if(selectObj){
    return (
        <div>
          {selectObj['Typography'].map((obj)=>{
            <SelectInputAndText></SelectInputAndText>
          })}
          {selectObj['SelectInput'].map((obj)=>{
            <SelectInput></SelectInput>
          })}
        </div>
      )    
  }else{
      return (<p> <br/></p>)
  }
}
export default FormSelectAndSummit
