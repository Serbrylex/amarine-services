import dynamic from 'next/dynamic'

import { Box, List } from '@mui/material'


import { Container } from './styles'

import useData from './data'

// Components
const EachListOfElements = dynamic(() => import('./eachListOfElements'))


const Drawer = () => {
  
  const { data } = useData()


  return (
    <Box sx={{
      display: 'flex',
      width: '20vw',
      height: '90vh'
    }}>
      <Container id='events_handler'>
          <Box
            sx={{
              height: '100%',
              width: '20vw',
              zIndex: 1000,
              backgroundColor: '#212528',
              color: 'white',
              boxShadow: "0 -2px 5px rgb(52 58 64 / 6%)",
              borderRight: "1px solid",
              borderRightColor: "#E6E6E6",
              position: 'relative'
            }}
          >
            
              
                <List sx={{ pl: '5px', pr: '5px', width: 'auto', height: '100%'}}>
                  {data.map((elements, index) => (
                    <EachListOfElements elem={elements} key={index}/>
                  ))}
                </List>
              
          </Box>
      </Container>
    </Box>
  )
}

export default Drawer