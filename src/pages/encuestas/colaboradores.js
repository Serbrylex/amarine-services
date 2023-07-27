import Head from 'next/head';

import EncuestaCustomTable from '@components/table/encuestaCustomTable'

// components
import MainLayout from '@layouts/mainLayout'

import LoadEncuestaCSV from '@hooks/useLoadEncuestaCSV';

const EncuestaColaboradores = () => { 
    const { dataTable } = LoadEncuestaCSV('Encuesta_a_colaboradores.csv')

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

export default EncuestaColaboradores