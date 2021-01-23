
import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormInput from './FormInput'
import { Button } from '@material-ui/core';
import { useApolloClient,gql} from '@apollo/client';

//molecule

function GroupInput(props) {
    const client = useApolloClient()
    // const [data, setData] = React.useState(null)
    const query = gql`
      query MyTodoK {
        todos {
            pages
            template
            organ
            molecule
            atom    

        }
    }`
    
    let data = client.readQuery({ query })
    // setData(newData)

    const handleClick = ()=>{
        client.writeQuery({
            query,
            data: {
                todos: [
                {
                    ...data['todos']['0'],
                    organ: {
                        moleculeArr : ['riceType','riceStandard','formStandard','new'],
                        moleculeDescription : ['ประเภทข้าวABC' , 'มาตรฐานข้าว' , 'ชื่อฟอร์ม','new'],
                    },
                }
                ]
            },
            variables :{
                userId : '1'
            }
        })
    }

  
    return (<div>
        <Button onClick={handleClick} variant="contained"> Hi</Button>
        {/* <FormInput></FormInput> */}
    </div>
    )
}

export default GroupInput