import React from 'react'
import TextField from '@material-ui/core/TextField';
import { gql, useApolloClient } from '@apollo/client';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//atom

function FormInput(props) {
    let client = useApolloClient()
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
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         let data = client.readQuery({ query })
    //         setData(data)
    //     }, 0)
    // }, [])
    if (data) {
        return (<div>
            <Select>
                {data['todos'][0]['molecule']['atomOption'][props['id']].map((value, idx) => {
                    return (
                        <MenuItem key={`${props['name']}-${idx}`}>{value}</MenuItem>
                    )
                })}
            </Select>
        </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default FormInput