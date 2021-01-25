import React from 'react'
import { useApolloClient,gql} from '@apollo/client';
import IconAndText from '../molecule/IconAndText'
// import SelectInputAndText from '../molecule/SelectInputAndText'

function GroupIconAndText() {  
  const [selectObj, setSelectObj] = React.useState()

  const query = gql`
    query MyTodoK {
      state {
        organ
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    setSelectObj(obj['data']['state']['0']['organ']['Navbar'])
  })

  if(selectObj){
    return (
        <div>
          {selectObj['IconAndText'].map((obj)=>{
            <IconAndText></IconAndText>
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
export default GroupIconAndText
