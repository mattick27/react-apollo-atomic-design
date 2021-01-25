import React from 'react'
import { useApolloClient,gql} from '@apollo/client';
import SelectInput from '../atom/SelectInput'
import Typography from '../atom/Typography'

function SelectInputAndText() {  
  const client = useApolloClient()
  const [selectObj, setSelectObj] = React.useState()
  const query = gql`
    query MyTodoK {
      state {
        molecule
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    setSelectObj(obj['data']['state']['0']['molecule']['SelectInputAndText'])
  })

  if(selectObj){
    return (
        <div>
          {selectObj['Typography'].map((obj)=>{
            <Typography text={obj['text']}></Typography>
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
export default SelectInputAndText
