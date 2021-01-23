
import React from 'react'
import TextField from '@material-ui/core/TextField';
import GroupInput from './GroupInput'
import GroupButton from './GroupButton'
import { Typography } from '@material-ui/core';

//organ

function FormGroup(props) {

    return (<div>
        <GroupInput></GroupInput>
        <GroupButton></GroupButton>
    </div>
    )
}

export default FormGroup