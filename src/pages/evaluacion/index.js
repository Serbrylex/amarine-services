import Head from 'next/head';

import { useRouter } from 'next/router'

import Header from '@components/header'


import { Box, Typography, Button, Paper } from '@mui/material'

const Evaluacion = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>AMarine Services | Evaluacion</title>
            </Head>
            <Header />
            <Box sx={{ 
                width: '100vw',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                padding: '5vh 5vw',
                backgroundColor: '#121F3D'
            }}>
                <Box sx={{ width: '20vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src='/images/bo.png' alt='evaluacion image' width='100%' height='auto'/>
                </Box>
                <Box sx={{ width: '50vw', color: 'white' }}>
                    <Typography component='h1' sx={{ fontWeight: 'bold', fontSize: '30px' }}>Desarrolla el talento de tu equipo</Typography>
                    <hr />
                    <br/>
                    <br/>
                    <Typography>El objetivo de este cuestionario es evaluar tus actitudes y conocimientos generales, ver como te desenvuelves bajo distintas cituaciones y garantizar que eres un buen cantidato para la compañia</Typography>
                    <br/>
                    <Typography sx={{ fontWeight: 'bold' }}>Presenta el cuestionario</Typography>
                    <ul style={{ color: '#33B1FF' }}>
                        <li>
                        <Typography sx={{ color: 'white' }}>
                            Tienes una unica oportunidad para presentar el cuestionario
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={{ color: 'white' }}>
                            El cuestionario consta de 10 preguntas
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={{ color: 'white' }}>
                            Tienes 30 minutos para presentarlo
                        </Typography>
                        </li>
                    </ul>

                    <Button 
                        variant="contained" sx={{ fontSize: '12px', fontWeight: 'bold', marginTop: '20px', backgroundColor: '#33B1FF' }}
                        onClick={()=>router.push('evaluacion/cuestionario')}
                    >
                        PRESENTAR EVALUACIÓN
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Evaluacion