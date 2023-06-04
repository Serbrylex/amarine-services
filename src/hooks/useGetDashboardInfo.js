import { useState, useEffect } from 'react'

import axios from 'axios'

import getCookie from '@services/getCookie'

const GetDashboardInfo = () => {
    const [sucursales, setSucursales] = useState(undefined)
    const [bajas, setBajas] = useState(undefined)
    const [altas, setAltas] = useState(undefined)


    useEffect(()=>{

        const headers = {
            'Authorization': getCookie('Token')
        }

        // Get sucursales
        axios.get(`${process.env.API_URL}/sucursal/`, {headers})
        .then(response => {
            if (response.status === 200) {
                setSucursales(response.data)
            }
        })
        .catch(error => {
            // Manejo de errores
        });

        // get bajas
        axios.get(`${process.env.API_URL}/personal/bajas/`, {headers})
        .then(response => {
            if (response.status === 200) {
                setBajas(response.data)
            }
        })
        .catch(error => {
            // Manejo de errores
        });

        // get bajas
        axios.get(`${process.env.API_URL}/personal/altas/`, {headers})
        .then(response => {
            if (response.status === 200) {
                setAltas(response.data)
            }
        })
        .catch(error => {
            // Manejo de errores
        });
    }, [])

    return {
        sucursales,
        bajas,
        altas
    }
}

export default GetDashboardInfo