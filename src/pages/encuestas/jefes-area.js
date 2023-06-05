import { useState, useEffect } from 'react'

import Head from 'next/head';

import { useRouter } from 'next/router'

import EncuestaCustomTable from '@components/table/encuestaCustomTable'

// components
import MainLayout from '@layouts/mainLayout'

import LoadEncuestaCSV from '@hooks/useLoadEncuestaCSV';

const JefesDeArea = () => { 
    const { dataTable } = LoadEncuestaCSV('Encuestas_a_jefes_de_areas.csv')

    return (
        <MainLayout>
            <Head>
                <title>AMarine | Practicas actuales RH</title>
            </Head>
            {dataTable ? 
                <EncuestaCustomTable dataTable={dataTable} /> :
                <></>
            }
        </MainLayout>
    )
}

export default JefesDeArea