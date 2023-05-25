import React from 'react';

// next
import { useRouter } from 'next/router';
import Head from 'next/head';

// components
import MainLayout from '@layouts/mainLayout'
import RadarChart from '@components/charts/radar'

// MUI
import { Box, Typography, Button, Paper } from '@mui/material'


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
    return (
        <MainLayout>
            <Head>
                <title>AMarine Services | Resultados de Evaluacion</title>
            </Head>

            {/*Header resultados de evaluación*/}
            <Box 
                sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '20vh' }}
            >
                <Box sx={{ textAlign: 'left' }}>
                    <Typography component='h2'>
                        Josesito Alphonso
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

                {/*Primera seccion*/}

                <br/>

                <Typography component={'h3'}>RESULTADOS POR GRUPOS DE INDICADORES</Typography>
                <Typography component={'p'}>
                    Puntuación obtenida para cada grupo de indicadores o comentarios realizados para cada uno de los grupos. Las notas superiores o iguales al valor
                    esperado aparecen en verde mientras que los valores inferiores aparecen en rojo.
                </Typography>

                <Box sx={{ width: '50vw', margin: '0 auto' }}>
                    <RadarChart data={dataRadar} />

                    <Box sx={{ 
                        border: '1px solid red', width: 'fit-content', height: 'auto',
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
            </Box>

        </MainLayout>
    )
}

export default Resultados