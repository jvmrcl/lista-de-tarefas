import React from 'react'
import Todo from './components/Todo';
import { Box, Container, Divider } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm" sx={{marginTop: 12}}>
      <Box sx={{marginBottom: '2rem', textAlign: 'left'}}>
        <header>
          <h1 style={{fontWeight: 500}}>Lista de Tarefas</h1>
          <p style={{marginBottom: 10, fontSize: 15}}>
            Anote suas tarefas, marque-as como concluídas, <br />
            edite ou exclua-os sempre que quiser.
          </p>
          <small>
            <a style={{color: 'darkblue'}} href="https://github.com/jvmrcl" target="_blank" rel="noreferrer">
              Criado por João Marcon © Todos os direitos reservados
            </a>
          </small>
        </header>
        <Divider sx={{marginTop: 1}}/>
      </Box>
      <Todo />
    </Container>
  )
}

export default App;