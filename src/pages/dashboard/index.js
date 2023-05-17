import Drawer from '@components/drawer'

import { Box, Typography, Grid, Paper } from '@mui/material'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@components/map'), {
    ssr: false,
})

import Header from '@components/header'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
  );
  
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
        display: true,
        text: 'Chart.js Line Chart',
    },
},
};

const BorderLinearProgress = styled(LinearProgress)(({ theme, toColor = 'red' }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#656F7C'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: toColor,
  },
}));
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Item = styled(Paper)(({ theme, backgroundColor }) => ({
  textAlign: 'center',
  height: '70%',
  width: '80%',
  margin: 'auto',
  color: 'white',
  backgroundColor
}));


const Dashboard = () => {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', width: '80vw', height: '90vh' }}>
                <Drawer />
                <Box sx={{
                    textAlign: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: '80vw',
                        justifyContent: 'space-around'
                    }}>
                        <Box sx={{ width: '40%', height: '45vh'}}>
                            <Grid container component="main" sx={{ height: '100%', width: '100%' }}>
                                <Grid item xs={6} sx={{ height: '40%', display: 'flex', alignItems: 'center' }}>
                                    <Item elevation={10} backgroundColor='#000000'>
                                        <Typography sx={{ fontSize:'25px', fontWeight: 'bold' }}>8</Typography>
                                        <Typography>Bajas de ingresos recientes</Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} sx={{ height: '40%', display: 'flex', alignItems: 'center' }}>
                                    <Item elevation={10} backgroundColor='#59CE8F'>
                                        <Typography sx={{ fontSize:'25px', fontWeight: 'bold' }}>10</Typography>
                                        <Typography>Ingresos recientes</Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} 
                                    sx={{ 
                                        height: '60%', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                    <Box sx={{ 
                                        width: '45%', height: 'auto', margin: 'auto', backgroundColor: '#1D232E',
                                        padding: '5%', borderRadius: '5px'
                                    }}>
                                        <CircularProgressbar value={66} text={`${66}%`} />
                                    </Box>
                                    <p>Bajas de ingreso total</p>
                                </Grid>
                                <Grid item xs={6} 
                                    sx={{ 
                                        height: '60%', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                    <Box sx={{ 
                                        width: '45%', height: 'auto', margin: 'auto', backgroundColor: '#1D232E',
                                        padding: '5%', borderRadius: '5px'
                                    }}>
                                        <CircularProgressbar value={66} text={`${66}%`} />
                                    </Box>
                                    <p>Ingresos recientes</p>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '55%', height: '45vh'}}>
                            <Line options={options} data={data} />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '80vw',
                        justifyContent: 'space-around'
                    }}>
                        <Box sx={{ width: '45%', height: '40vh', position: 'relative' }}>
                            <Map />
                        </Box>
                        <Box sx={{ width: '45%', height: '40vh'}}>
                            <Paper sx={{ 
                                backgroundColor: '#061A23', width: '80%', height: '100%', padding: '5%',
                                margin: 'auto'
                            }}>
                                <Typography component='h3' sx={{ color: 'white', fontSize:'20px' }}>Motivo de renuncia</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                                    <Box>
                                        <Box sx={{ 
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: '5px' 
                                        }}>
                                            <Box sx={{ 
                                                width: '20px', height: '20px', backgroundColor: 'red', mr: 1
                                            }}>
                                            </Box> 
                                            <Typography sx={{ color: 'white' }}>Abandono de trabajo</Typography>   
                                        </Box>
                                        <Box sx={{ position: 'relative', height: 'fit-content' }}>
                                            <Typography sx={{ 
                                                position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, color: 'white', zIndex:2 
                                            }}>
                                                30%
                                            </Typography>
                                            <BorderLinearProgress variant="determinate" value={30} toColor='red'/>
                                        </Box>
                                    </Box>

                                    <Box>
                                        <Box sx={{ 
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: '5px' 
                                        }}>
                                            <Box sx={{ 
                                                width: '20px', height: '20px', backgroundColor: '#DC5F00', mr: 1
                                            }}>
                                            </Box> 
                                            <Typography sx={{ color: 'white' }}>Renuncia voluntaria</Typography>   
                                        </Box>
                                        <Box sx={{ position: 'relative', height: 'fit-content' }}>
                                            <Typography sx={{ 
                                                position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, color: 'white', zIndex:2 
                                            }}>
                                                70%
                                            </Typography>
                                            <BorderLinearProgress variant="determinate" value={70} toColor='#DC5F00'/>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Dashboard