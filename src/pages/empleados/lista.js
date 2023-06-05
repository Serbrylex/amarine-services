import { useState, useEffect } from 'react'

import getCookie from '@services/getCookie'
import handlePrintPdf from '@services/handlePrintPdf'

import axios from 'axios'

import Head from 'next/head';
import MainLayout from '@layouts/mainLayout'

import ListaTable from '@components/table/listaTable'

import { Box, Typography, Button } from '@mui/material';

const table = {
    rows: [{data: []}],
    colums: ['']
}

const Lista = () => {
    const [empleados, setEmpleados] = useState(undefined)
    const [lista, setLista] = useState({
        rows: [],
        colums: ['Id', 'Nombre', 'Email', '¿Asistió?', 'Fecha']
    })

    const [selectedEmpleado, setSelectedEmpleado] = useState(undefined)
    const [sendAlready, setSendAlready] = useState(false)

    useEffect(()=>{
        const headers = {
            'Authorization': getCookie('Token')
        }
        
        axios.get(`${process.env.API_URL}/personal/`, { headers })
        .then(response => {
            if (response.status === 200) {
                console.log(response.data)
                const users = response.data.slice(0, 20)
                const format = {
                    rows: users.map(user => {
                        return {
                            data: [
                                user.usuario.id,
                                user.usuario.first_name,
                                user.usuario.last_name,
                                "9984"+Math.floor(100000 + Math.random() * 900000),
                                user.usuario.email
                            ]
                        }
                    }),
                    colums: ['Id', 'Nombre', 'Apellidos', 'Número telefonico', 'Email']
                }
                setEmpleados(format)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const handlePrintPdfMid = () => {
        if (sendAlready) {
            handlePrintPdf(lista)
        } else {
            alert('Tienes que enviar los datos que tomaste')
        }
    }

    const handleSendLista = () => {

        const headers = {
            'Authorization': getCookie('Token')
        }
        const data = lista.rows.map(row => ({
            email: row.data[2],
            asistio: row.data[3],
            fecha: row.data[4]
        }))
        if (data.length > 0) {
            axios.post(`${process.env.API_URL}/personal/send-lista/`, data, { headers })
            .then(response => {
                console.log('response')
                console.log(response)
                if (response.status === 201) {
                    alert('Datos enviados con exito')
                    setSendAlready(true)
                }
            })
            .catch(error => console.log(error))
        } else {
            alert('No tienes datos agregados')
        }
    }

    const handleModifyAsistencia = (idx) => {
        setSendAlready(false)
        const listRows = [...lista.rows]
        listRows[idx].data[3] = !listRows[idx].data[3]

        setLista({
            rows: listRows,
            colums: lista.colums
        })
    }

    const handleAddToList = (idx, asistio) => {
        setSendAlready(false)
        const newList = {...lista}
        const data = empleados.rows[idx].data
        const fechaHora = new Date();
        const año = fechaHora.getFullYear();
        const mes = ('0' + (fechaHora.getMonth() + 1)).slice(-2); // Se agrega 1 al mes, ya que los meses en JavaScript se indexan desde 0
        const dia = ('0' + fechaHora.getDate()).slice(-2);
        const fecha = `${año}-${mes}-${dia}`;
        newList.rows.push({data:[data[0], data[1], data[4], asistio, fecha]})
        setLista(newList)

        // drop from empleados
        let empl = empleados.rows
        empl.splice(idx, 1)
        setEmpleados({
            rows: empl,
            colums: empleados.colums
        })
    }

    const handlePassToForm = (idx) => {
        setSendAlready(false)
        setSelectedEmpleado([...empleados.rows[idx].data, idx])
    }
    
    return (
        <MainLayout>
            <Head>
                <title>AMarine | Pase de lista</title>
            </Head>

            <Box sx={{ width: '95%', margin: '10px auto' }}>

                <Typography component={'h1'} sx={{
                    fontWeight: 'bold',
                    margin: '20px 0',
                    fontSize: '30px'
                }}>
                    Lista de asistencias de Amarine Services
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        heigth: '50vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >   
                    <Box sx={{ 
                        width: '49%', overflowY: 'hidden', display: 'flex', 
                        alignItens: 'top', height: 400 
                    }}>
                        {empleados &&
                            <ListaTable dataTable={empleados} handleAddToList={handlePassToForm}/>
                        }
                    </Box>
                    <Box sx={{ 
                        width: '49%', overflowY: 'hidden', display: 'flex', 
                        alignItens: 'top', height: 400 
                    }}>
                        {lista &&
                            <ListaTable 
                                dataTable={lista} handleModifyAsistencia={handleModifyAsistencia}
                            />
                        }
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'left', width: '50%' }}>
                    <Typography component={'h2'} sx={{ fontSize:'25px', fontWeight: '300' }}>
                        Detalles del empleado
                    </Typography>
                    
                    <br />

                    <Typography>ID: {selectedEmpleado ? selectedEmpleado[0]: ''}</Typography>
                    <Typography>Nombre: {selectedEmpleado ? selectedEmpleado[1]: ''}</Typography>
                    <Typography>Apellidos: {selectedEmpleado ? selectedEmpleado[2]: ''}</Typography>
                    <Typography>Teléfono: {selectedEmpleado ? selectedEmpleado[3]: ''}</Typography>
                    <Typography>Email: {selectedEmpleado ? selectedEmpleado[4]: ''}</Typography>
                    
                    <Box sx={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        margin: '10px 0'
                    }}>
                        <Button variant="outlined" 
                            onClick={()=>handleAddToList(selectedEmpleado[5] | 0, true)}
                        >
                            Asistió
                        </Button>
                        <Button variant="outlined" 
                            onClick={()=>handleAddToList(selectedEmpleado[5] | 0, false)}
                        >
                            No asistió
                        </Button>
                        <Button variant="outlined" 
                            onClick={handlePrintPdfMid}
                        >
                            Descargar Pdf
                        </Button>
                        <Button variant="outlined" 
                            onClick={handleSendLista}
                        >
                            Enviar Datos
                        </Button>
                    </Box>
                </Box>
            </Box>

        </MainLayout>
    )
}

export default Lista