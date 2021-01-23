
import React from 'react'
import FormInput from './FormInput'
import { Typography } from '@material-ui/core';
import { gql, useApolloClient } from '@apollo/client';
import { Button } from '@material-ui/core';

//molecule

function GroupInput(props) {
    let client = useApolloClient()
    const [data, setData] = React.useState(null)
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
    client.watchQuery({ query: query }).subscribe(({data}) => setData(data))

    if (data) {
        return (<div>
            {data['todos'][0]['organ']['moleculeArr'].map((value, idx) => {
                return (
                    <div>
                        <Typography>{data['todos'][0]['organ']['moleculeDescription'][idx]}</Typography>
                        <FormInput id={idx} name={value}></FormInput>
                    </div>
                )
            })}
        </div>
        )
    } else {
        return <div></div>
    }
}

export default GroupInput