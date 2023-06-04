// react
import React, { useEffect, useState } from 'react';

// next
import dynamic from 'next/dynamic'

// mui
import { Box, Typography, Grid, Paper } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// components
import MainLayout from '@layouts/mainLayout'
const Map = dynamic(() => import('@components/map'), {
    ssr: false,
})

// third libraries
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { styled } from '@mui/material/styles';

// hooks
import GetDashboardInfo from '@hooks/useGetDashboardInfo'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
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
      label: 'Bajas Totales',
      data: labels.map(() => faker.number.int({ min: 10, max: 1000 })),
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

    const { sucursales, bajas, altas } = GetDashboardInfo()
    const [movimientos, setMovimientos] = useState(undefined)
    const [motivosBajas, setMotivosBajas] = useState(undefined)

    useEffect(()=>{

        if (bajas && altas) {
            const total = bajas.length + altas.length
            setMovimientos({
                bajas: parseInt(100 / total * bajas.length),
                altas: parseInt(100 / total * altas.length)
            })
            // abandono, renuncua
            let motivos = [0, 0]
            bajas.map(baja => {
                if (baja.motivo === 'False') {
                    motivos[0] += 1
                } else {
                    motivos[1] += 1
                }
            })
            const totalMotivos = motivos[0] + motivos[1]
            setMotivosBajas({
                abandono: parseInt(100 / totalMotivos * motivos[0]),
                renuncia: parseInt(100 / totalMotivos * motivos[1])
            })
        }
    }, [sucursales, bajas, altas])

    return (
        <MainLayout>
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around'
            }}>
                <Box sx={{ width: '40%', height: '45vh'}}>
                    <Grid container component="main" sx={{ height: '100%', width: '100%' }}>
                        <Grid item xs={6} sx={{ height: '40%', display: 'flex', alignItems: 'center' }}>
                            <Item elevation={10} 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor:'#000000'
                                }}
                            >
                                <Typography sx={{ fontSize:'25px', fontWeight: 'bold' }}>
                                    {bajas ? bajas.length : 0}
                                </Typography>
                                <Typography>Bajas de ingresos recientes</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sx={{ height: '40%', display: 'flex', 
                            alignItems: 'center' }}>
                            <Item elevation={10} 
                                sx={{
                                    backgroundColor: '#59CE8F',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography sx={{ fontSize:'25px', fontWeight: 'bold' }}>
                                    {altas ? altas.length : 0}
                                </Typography>
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
                                <CircularProgressbar 
                                    value={movimientos ? movimientos.bajas : 0} 
                                    text={`${movimientos ? movimientos.bajas : 0}%`} 
                                />
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
                                <CircularProgressbar 
                                    value={movimientos ? movimientos.altas : 0} 
                                    text={`${movimientos ? movimientos.altas : 0}%`} 
                                />
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
                    <Map sucursales={sucursales}/>
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
                                        {motivosBajas ? motivosBajas.abandono : 0}%
                                    </Typography>
                                    <BorderLinearProgress 
                                        variant="determinate" 
                                        value={motivosBajas ? motivosBajas.abandono : 0} 
                                        sx={{backgroundColor:'red'}}
                                    />
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
                                        {motivosBajas ? motivosBajas.renuncia : 0}%
                                    </Typography>
                                    <BorderLinearProgress 
                                        variant="determinate" 
                                        value={motivosBajas ? motivosBajas.renuncia : 0} sx={{backgroundColor:'#DC5F00'}}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default Dashboard