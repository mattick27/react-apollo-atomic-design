import React from 'react'
import { useApolloClient, gql } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flexGrow: 1,
  },
  grid: {
    height: "100vh",
    backgroundColor: 'gray'
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}))

function TemplateFormAndImg() {
  const classes = useStyles()
  const client = useApolloClient()
  const [templateOption, setTemplateOption] = React.useState('g')

  const query = gql`
    query MyTodoK {
      state {
        templateOption
      }
  }`
  client.watchQuery({ query }).subscribe((obj) => {
    if(false){
      setTemplateOption()
    }
    // setTemplateOption(obj['data']['state']['0']['templateOption'])
  })

  if (templateOption) {
    return (
      <Grid container spacing={3} style={{ backgroundColor: 'gray' }}>
        <Grid
          container
          style={{ height: '15vh' }}
          item xs={4}>
          <Paper
            style={{ width: '100%', height: '100%' }}
            className={classes.paper}>IconAndText</Paper>
        </Grid>
        <Grid
          container
          style={{ height: '15vh' }}
          item xs={4}>
          <Paper
            style={{ width: '100%', height: '100%' }}
            className={classes.paper}> S P A C E</Paper>
        </Grid>
        <Grid
          container
          style={{ height: '15vh' }}
          item xs={4}>
          <Paper
            style={{ width: '100%', height: '100%' }}
            className={classes.paper}> IconTextAndIconTextMenu</Paper>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems='center'
          style={{ height: '10vh' }}
          item xs={12}>
          <Paper style={{ width: '100%', height: '100%' }} className={classes.paper}>
            Typography
          </Paper>
        </Grid>
        <Grid
          style={{ height: '55vh' }}
          item xs={6}>
          <Paper className={classes.paper}>
            PictureAndText
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            FormSelectAndSummit
          </Paper>
        </Grid>
        <Grid
          style={{ height: '20vh' }}
          item xs={6}>
          <Paper className={classes.paper}> S P A C E</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> S P A C E</Paper>
        </Grid>
      </Grid>

    )
  } else {
    return <div></div>
  }
}
export default TemplateFormAndImg
