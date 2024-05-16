import { Comment, DeleteOutlineOutlined } from '@mui/icons-material'
import { Checkbox, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const ListView = ({ tasks, check, edit, remove }) => {
  return (
    <Container maxWidth="sm" sx={{maxHeight: '305px', overflowY: 'scroll', marginTop: 2}}>
      <List>
        {tasks.map((task) => (
          <ListItem
          id={task.id}
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="comments" onClick={() => edit(task.id)}>
                <Comment />
              </IconButton>
              <IconButton edge="end" aria-label="remove" onClick={remove}>
                <DeleteOutlineOutlined />
              </IconButton>
            </>
          }
          disablePadding>
          <ListItemButton dense>
            <ListItemIcon>
              <Checkbox
                checked={task.completed}
                onChange={() => check(task.id)}
                edge="start"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={task.content} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default ListView