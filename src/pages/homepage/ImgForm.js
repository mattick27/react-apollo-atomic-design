import React from 'react'
import FormInput from './FormInput'
import GroupInput from './GroupInput'
import FormGroup from './FormGroup'
import { gql, useApolloClient } from '@apollo/client';
//template
function ImgForm(props) {
    // let client = useApolloClient()
    // const query = gql`
    //   query MyTodoK {
    //     todos {
    //         id
    //         completed
    //         text  
    //     }
    // }`
    // const handleClick = ()=>{
    //   let data = client.readQuery({query})
    //   data['todos'][0].text()
    // }
    return (<div>
        <FormGroup></FormGroup>
        {/* <FormInput
                    handleValue={props.handleValue}
                    name={value} /> */}
        {/* <button onClick={handleClick}> clickAB </button> */}
    </div>
    )
}

export default ImgForm

