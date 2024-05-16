import { Container, FormControl, InputAdornment, TextField } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React from 'react'

const FormView = ({ iref, addTask }) => {
  return (
    <Container maxWidth="sm">
      <FormControl sx={{width: '100%'}}>
        <TextField
          sx={{backgroundColor: 'aliceblue', borderRadius: 2}}
          ref={iref}
          id="input-with-icon-textfield"
          label="Qual é a sua tarefa de hoje?"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddCircleOutlineOutlinedIcon
                  sx={{cursor: 'pointer'}}
                  onClick={addTask} />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
      </FormControl>
    </Container>
  )
}

export default FormView