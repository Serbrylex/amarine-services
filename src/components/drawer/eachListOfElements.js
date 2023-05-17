// Each List
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Line } from './styles'

// React & Utilities
import List from '@mui/material/List';
import { useState } from 'react'

// Next
import { useRouter } from 'next/router'

const EachListOfElements = ({ elem }) => {

  const router = useRouter()
  const pathname = router.pathname[router.pathname.length - 1] == '/' ? router.pathname : router.pathname + '/'

  const [open, setOpen] = useState(()=>{
    const routes = pathname.split('/')
    const currentLink = elem.link.split('/')

    //  [1] porque el [0] está vacio
    //  const elem = '/hola/como/estas'
    //  elem.split('/')
    //  ['', 'hola', 'como', 'estas']
    return routes.includes(currentLink[1])
  })

  const handleClick = (link) => {
    router.push(link)
  }

  return (
    <>
      <ListItemButton onClick={()=>{
          setOpen(!open)
        }}
      >
        <ListItemIcon sx={{ minWidth: 'fit-content', pr: '5px', width:'30px', height:'30px', color: 'grey' }}>
          {elem.icons}
        </ListItemIcon>
        <ListItemText 
          primary={elem.title} primaryTypographyProps={{fontWeight: open ? 500 : 400}} sx={{ p: 0 }}
        />
      </ListItemButton>
      {elem.elements.length > 0 && 
      <Collapse in={open} timeout="auto" unmountOnExit sx={{position: 'relative'}}>
        <Line />
        <List component="nav" disablePadding sx={{ pl: 3 }}>
          {elem.elements.map((el, index)=>(
            <ListItemButton key={index} selected={pathname === el.link} sx={{ padding: '5px 0 5px 10px', backgroundColor: pathname === el.link ? 'rgb(52 58 64 / 10%) !important' : 'transparent' }} onClick={()=>handleClick(el.link)}>
              <ListItemText primary={el.title} primaryTypographyProps={{fontWeight: pathname === el.link ? 500 : 380}} sx={{ pl:1, color: 'grey' }}/> 
            </ListItemButton>
          ))}
        </List>  
      </Collapse>}
    </>
  )
}

export default EachListOfElements