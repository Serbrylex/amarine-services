import { Box, Typography } from '@mui/material'

// Next
import dynamic from 'next/dynamic'

import MainLayout from '@layouts/mainLayout'

import GetSocialMedia from '@hooks/useGetSocialMedia'

// Esto mientras uso faker, una vez cambiado puedo quitar el ssr: false
const CustomizedTables = dynamic(() => import('@components/table'), {
    ssr: false,
})

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
import { faker } from '@faker-js/faker';

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

const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export const normaldata = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 10, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.number.int({ min: 10, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.number.int({ min: 10, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
};

function createData(image, followers) {
    return { image, data: [followers] }
}
  
const firstTable = {
    rows: [
        createData('/images/facebook.png', 159),
        createData('/images/Instagram.png', 237),
        createData('/images/tik-tok.png', 262)
    ],
    colums: [
        'Redes Sociales',
        'Incremento Seguidores'
    ]
}

const createDataTwo = (image) => {
    return {
        image,
        data: labels.map(() => faker.number.int({ min: 10, max: 1000 }))
    }
}

const secondTable = {
    rows: [
        createDataTwo('/images/facebook.png', ),
        createDataTwo('/images/Instagram.png'),
        createDataTwo('/images/tiktok.webp')
    ],
    colums: [
        'Redes sociales',
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
    ]
}


const SocialMedia = () => {
    const { redes, bigTableData } = GetSocialMedia()
    console.log({ bigTableData })
    return (
        <MainLayout>
            <Typography component='h1' 
                sx={{ height: '10vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold' }}
            >
                Redes sociales
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Box sx={{ width: '250px' }}>
                    <CustomizedTables dataTable={firstTable} />
                </Box>
                <Box sx={{ width: '800px' }}>
                    <CustomizedTables dataTable={bigTableData ? bigTableData : secondTable} />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', width: '80vw', height: '40vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Box sx={{ 
                    backgroundColor: '#061A23', width: '35vw', height: '30vh', position: 'relative', padding: 0, borderRadius: '5px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}> 
                    <figure style={{ 
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, opacity: '0.1', margin: 0, padding: 0, width: '35vw'
                    }}>
                        <img src="/images/facebook.png" alt="fondo" 
                            style={{ height: '100%', width: '15vw', objectFit: 'cover' }}
                        />
                    </figure>
                    <Box sx={{ zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '30vh' }}>
                        <Bar options={options} data={{
                            labels,
                            datasets: [
                                {
                                label: 'Facebook',
                                data: bigTableData ? 
                                    bigTableData.rows[0].data : 
                                    labels.map(() => faker.number.int({ min: 10, max: 1000 })),
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                }
                            ],}} 
                        />
                    </Box>
                </Box>

                <Box sx={{ 
                    backgroundColor: '#061A23', width: '35vw', height: '30vh', position: 'relative', padding: 0, borderRadius: '5px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <figure style={{ 
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, opacity: '0.1', margin: 0, padding: 0, width: '35vw'
                    }}>
                        <img src="/images/Instagram.png" alt="fondo" 
                            style={{ height: '100%', width: '15vw', objectFit: 'cover' }}
                        />
                    </figure>
                    <Box sx={{ zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '30vh' }}>
                    <Bar options={options} data={{
                            labels,
                            datasets: [
                                {
                                    label: 'Instagram',
                                    data: bigTableData ? 
                                        bigTableData.rows[1].data : 
                                        labels.map(() => faker.number.int({ min: 10, max: 1000 })),
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                }
                            ],}} 
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '80vw', height: '40vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Box sx={{ 
                    backgroundColor: '#061A23', width: '35vw', height: '30vh', position: 'relative', padding: 0, borderRadius: '5px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <figure style={{ 
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, opacity: '0.1', margin: 0, padding: 0, width: '35vw'
                    }}>
                        <img src="/images/tiktok.webp" alt="fondo" 
                            style={{ height: '100%', width: '25vw', objectFit: 'cover' }}
                        />
                    </figure>
                    <Box sx={{ zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '30vh' }}>
                        <Bar options={options} data={{
                            labels,
                            datasets: [
                                {
                                    label: 'Tiktok',
                                    data: bigTableData ? 
                                        bigTableData.rows[2].data : 
                                        labels.map(() => faker.number.int({ min: 10, max: 1000 })),
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                }
                            ],}} 
                        />
                    </Box>
                </Box>

                <Box sx={{ 
                    backgroundColor: '#061A23', width: '35vw', height: '30vh', position: 'relative', padding: 0, borderRadius: '5px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <figure style={{ 
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, opacity: '0.1', margin: 0, padding: 0, width: '35vw'
                    }}>
                        <img src="/images/amarine_logo.webp" alt="fondo" 
                            style={{ height: '100%', width: '35vw', objectFit: 'cover' }}
                        />
                    </figure>
                    <Box sx={{ zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100% ' }}>
                        <Bar options={options} data={data} />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default SocialMedia