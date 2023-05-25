// Next
import Head from 'next/head'

// components
import Header from '@components/header'

// mui
import { Box } from '@mui/material'


const QuestionarioLayout = ({ children }) =>  (
    <>
        <Head>
            <title>AMarine Services | Questionario</title>
        </Head>
        <Header />
        <Box sx={{ 
            width: '100vw',
            minHeight: '90vh',
            backgroundColor: '#121F3D'
        }}>
            {children}
        </Box>
    </>
)

export default QuestionarioLayout