import { useState, useEffect } from 'react'

import axios from 'axios'

import csvToJson from 'csvtojson';

const LoadEncuestaCSV = (file) => {
    const [dataTable, setDataTable] = useState(undefined)

    const loadJson = async (csv) => {
        const json = await csvToJson().fromString(csv);
        console.log(json)
        const jsonString = json;
        const keys = Object.keys(jsonString[0])

        const table = {
            rows: jsonString.map(data => ({
                data: keys.map(key => data[key])
            })),
            colums: keys
        }
        setDataTable(table)
    }

    useEffect(()=>{
        axios.get('/csv/'+file)
        .then(response => {
            console.log(response.data)
            loadJson(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return { dataTable }
}

export default LoadEncuestaCSV