import React from 'react'
import ImgSpan from './ImgSpan'
import ImgForm from './ImgForm'

import { useApolloClient,gql} from '@apollo/client';
//pages

//The atoms should be written without margins and positions;

//Only the molecules and organisms can set the positions of atoms, but these stacks can’t have any styles of margins and positions;

//Templates have only one function: to set the grid of pages but never positions of specific components;

//Pages render the components with a template defined and it’s here that the Atomic Design will be connected to the rest of the application;

function Homepage() {
  
  const client = useApolloClient()
  let [isRender , getRender] = React.useState({})
  const query = gql`
    query MyTodoK {
      todos {
        pages
        template
        organ
        molecule
        atom
        getRender
      }
  }`
  client.writeQuery({
    query,
    data: {
      todos: [
        {
          pages : {
            ns : 'home'
          },
          template : {},
          organ: {
            moleculeArr : ['riceType','riceStandard','formStandard','new'],
            moleculeDescription : ['ประเภทข้าว' , 'มาตรฐานข้าว' , 'ชื่อฟอร์ม','new'],
          },
          molecule : {
            atomArr : ['select'],
            atomOption : [['ข้าวขาว','ข้าวกล้อง','ข้าวเปลือก'],['ข้าวขาว 100%','ข้าวขาว 5%','ข้าวขาวตามตัวอย่าง'],['อีซีไรซ์ 01','อีซีไรซ์ 02'],['']],
            atomValue : [['whiteRice','cargoRice','paddyRice'],['whiteRice100','whiteRice5','whiteRiceSample'],['easyrice01','easyrice02'],['']],
            atomFunction : ()=>{},
          },
          atom : {},
          getRender : getRender
        }
      ]
    },
    variables : {
      userId : '0'
    }
  })
  return (
    <div >
      {/* <ImgSpan></ImgSpan> */}
      <ImgForm></ImgForm>
      {/* <button onClick={handleClick}> click</button> */}
      {/* <button onClick={handleClickB}> clickB</button> */}
    </div>
  )
}
export default Homepage
