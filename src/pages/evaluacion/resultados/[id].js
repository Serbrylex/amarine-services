import React from 'react';

// next
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import Head from 'next/head';

// components
import MainLayout from '@layouts/mainLayout'
import RadarChart from '@components/charts/radar'

// MUI
import { Box, Typography, Button } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print';


import { faker } from '@faker-js/faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
};
  

export const data = {
  labels: [''],
  datasets: [
    {
      label: 'Autoevaluación',
      data: [faker.number.int({ min: 10, max: 100 })],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Supervisor',
      data: [faker.number.int({ min: 10, max: 100 })],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


// Radar
const labelsRadar = [
    'Objetivos', 'Valores de la organización', 'Competencias estrategicas', 
    'Competencias digitales', 'Idiomas'
]

export const dataRadar = {
  labels: labelsRadar,
  datasets: [
    {
      label: 'Autoevaluación',
      data: labelsRadar.map(()=>faker.number.int({ min: 10, max: 100 })),
      backgroundColor: 'transparent',
      borderColor: '#428DD7',
      borderWidth: 2,
    },
    {
        label: 'Requerida',
        data: labelsRadar.map(()=>faker.number.int({ min: 10, max: 100 })),
        backgroundColor: 'transparent',
        borderColor: '#CA1954',
        borderWidth: 2,
    },
    {
        label: 'Evaluación',
        data: labelsRadar.map(()=>faker.number.int({ min: 10, max: 100 })),
        backgroundColor: 'transparent',
        borderColor: '#EAB419',
        borderWidth: 2,
    }
  ],
};


const Resultados = () => {
    const router = useRouter()
    const id = router.query.id

    const [user, setUser] = useState(undefined)

    useEffect(()=>{
        if (window) {
            const userJson = JSON.parse(window.localStorage.getItem('user'))
            setUser(userJson)
        }
    }, [])

    const handlePrint = () => {
        alert('nani')
    }

    return (
        <MainLayout>
            <Head>
                <title>AMarine Services | Resultados de Evaluacion</title>
            </Head>
            {/*Container*/}
            <Box 
                sx={{
                    width: '90%', height: 'auto',
                    margin: '20px 5%'
                }}
            >
                {/*Header resultados de evaluación*/}
                <Box 
                    sx={{ 
                        display: 'flex', justifyContent: 'space-between', width: '90%', height: '12vh',
                        margin: '10px 5% 0 5%'
                    }}
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography component='h2'>
                            Usuario: {user ? user.usuario.first_name : ''}
                        </Typography>
                        <Typography>
                            Area: Analista
                        </Typography>
                        <Typography>
                            Departamento: Marketing
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'right' }}>
                        <Typography component='h2'>
                            Supervidor: Luis
                        </Typography>
                        <Typography>
                            Periodo: de 21 noviembre 2022 al 20 mayo 2023
                        </Typography>
                        <Button variant="outlined" sx={{ margin: '5px 0' }} startIcon={<PrintIcon />} onClick={handlePrint}>
                            Imprimir resultados
                        </Button>
                    </Box>
                </Box>

                <hr />

                {/* Seccion de resultados */}
                <Box>
                    <Typography component={'h3'}>RESULTADOS OBTENIDOS</Typography>

                    {/*Primera seccion*/}
                    <Box sx={{ width: '500px', height: 'auto', margin: '0 auto' }}>
                        <Bar options={options} data={data} />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginLeft: '15px' }}>
                            <Typography>Autoevaluación</Typography>
                            <Typography>Supervisor</Typography>
                        </Box>
                    </Box>


                    <br/>
                    <br/>
                    <br/>

                    {/*segunda seccion*/}
                    <Typography component={'h3'}>RESULTADOS POR GRUPOS DE INDICADORES</Typography>
                    <Typography component={'p'}>
                        Puntuación obtenida para cada grupo de indicadores o comentarios realizados para cada uno de los grupos. Las notas superiores o iguales al valor
                        esperado aparecen en verde mientras que los valores inferiores aparecen en rojo.
                    </Typography>

                    <Box sx={{ width: '50vw', margin: '0 auto' }}>
                        <RadarChart data={dataRadar} />

                        <Box sx={{ 
                            width: 'fit-content', height: 'auto',
                            margin: '0 0 0 auto'
                        }}>
                            <Box sx={{ display: 'flex', margin: '10px 0' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#428DD7', marginRight: '5px' }}></div> 
                                <Typography>
                                    Autoevaluación
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', margin: '10px 0' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#CA1954', marginRight: '5px' }}></div> 
                                <Typography>
                                    Requerida
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', margin: '10px 0' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#EAB419', marginRight: '5px' }}></div> 
                                <Typography>
                                    Evaluacion
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <br />
                    {/*tercera seccion foda*/}

                    <Box sx={{
                        width: '90%',
                        heigth: '500px',
                        margin: '20px auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Box
                            sx={{
                                width: '100%',
                                margin: '20px 0',
                                display: 'flex'
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#fff1e6',
                                    width: '48%',
                                    margin: '0 2%',
                                }}
                            >
                                <Typography variant="h6"
                                    sx={{
                                        padding: '10px 5px',
                                        borderRadius: '5px',
                                        height: '50px',
                                        backgroundColor: '#ffc89d'
                                    }}    
                                >
                                    Fortalezas
                                </Typography>
                                <ol style={{ textAlign: 'left' }}>
                                    <li>Fortaleza 1</li>
                                    <li>Fortaleza 2</li>
                                    <li>Fortaleza 3</li>
                                </ol>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: '#e2ece9',
                                    width: '48%',
                                    margin: '0 2%',
                                }}
                            >
                                <Typography variant="h6"
                                    sx={{
                                        padding: '10px 5px',
                                        borderRadius: '5px',
                                        height: '50px',
                                        backgroundColor: '#b7d2c8'
                                    }}    
                                >
                                    Oportunidades
                                </Typography>
                                <ol style={{ textAlign: 'left' }}>
                                    <li>Valores de la organización</li>
                                    <li>Competencias estrategicas</li>
                                    <li>Competencias digitales</li>
                                    <li>Idiomas</li>
                                </ol>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                margin: '20px 0',
                                display: 'flex'
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#fde2e4',
                                    width: '48%',
                                    margin: '0 2%',
                                }}
                            >
                                <Typography variant="h6"
                                    sx={{
                                        padding: '10px 5px',
                                        borderRadius: '5px',
                                        height: '50px',
                                        backgroundColor: '#f7b2b5'
                                    }}    
                                >
                                    Debilidades
                                </Typography>
                                <ol style={{ textAlign: 'left' }}>
                                    <li>Debilidad 1</li>
                                    <li>Debilidad 2</li>
                                    <li>Debilidad 3</li>
                                </ol>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: '#e2ece9',
                                    width: '48%',
                                    margin: '0 2%',
                                }}
                            >
                                <Typography variant="h6"
                                    sx={{
                                        padding: '10px 5px',
                                        borderRadius: '5px',
                                        height: '50px',
                                        backgroundColor: '#b7d2c8'
                                    }}    
                                >
                                    Amenazas
                                </Typography>
                                <ol style={{ textAlign: 'left' }}>
                                    <li>Amenaza 1</li>
                                    <li>Amenaza 2</li>
                                    <li>Amenaza 3</li>
                                </ol>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default Resultados