import { useState, useEffect } from 'react'

import getCookie from '@services/getCookie'

import axios from 'axios'

import Head from 'next/head';
import MainLayout from '@layouts/mainLayout'

import { Box, Typography, Grid, Paper } from '@mui/material'

const Empleados = () => {
    const [empleados, setEmpleados] = useState(undefined)

    useEffect(()=>{
        const headers = {
            'Authorization': getCookie('Token')
        }
        axios.get(`${process.env.API_URL}`, { headers })
        .then(response => {
            if (response.status === 200) {
                console.log(response.data)
                setEmpleados(response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <MainLayout>
            <Head>
                <title>AMarine | Empleados Dashboard</title>
            </Head>

            <Box sx={{ width: '90%', margin: '10px auto' }}>
                {/*Asistencias Bar Chart*/}
                {/*Inacistencias Bar Chart*/}
                {/*Progreso */}
            </Box>
        </MainLayout>
    )
}

export default Empleados