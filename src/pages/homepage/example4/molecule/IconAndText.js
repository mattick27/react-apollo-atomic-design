import React from 'react'
import { useApolloClient, gql } from '@apollo/client';
import Icon from '../atom/Icon'
import Typography from '../atom/Typography'

function IconAndText() {
  const client = useApolloClient()
  const [selectObj, setSelectObj] = React.useState()
  const query = gql`
    query MyTodoK {
      state {
        molecule
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    setSelectObj(obj['data']['state']['0']['molecule']['PictureAndText'])
  })

  if (selectObj) {
    return (
      <div>
        {selectObj['Picture'].map((obj) => {
          <Icon></Icon>
        })}
        {selectObj['Typography'].map((obj) => {
          <Typography text={obj['text']}></Typography>
        })}
      </div>
    )
  } else {
    return (<p> <br /></p>)
  }
}
export default IconAndText
