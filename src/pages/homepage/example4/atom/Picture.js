import React from 'react'

function Picture({text}) {  
  const client = useApolloClient()
  const [selectObj, setSelectObj] = React.useState()
  const query = gql`
    query MyTodoK {
      state {
        atom
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    setSelectObj(obj['data']['state']['0']['atom']['Picture'])
  })

  if(selectObj){
    return (
        <p>{text}</p>
      )    
  }else{
      return (<p> <br/></p>)
  }
}
export default Picture
