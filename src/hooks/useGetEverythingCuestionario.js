import { useState, useEffect } from 'react'

import getCookie from '@services/getCookie'
import axios from 'axios'

const GetEverythingCuestionario = () => {
    const [questionario, setQuestionario] = useState()

    useEffect(()=>{
        const headers = {
            'Authorization': getCookie('Token')
        }
        axios.get(`${process.env.API_URL}/questionario/2/`, { headers })
        .then(response => {
            if (response.status === 200) {
                console.log(response.data)
                setQuestionario(response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, []) 

    const handleValidateAnswers = async (respuestas) => {
        const headers = {
            'Authorization': getCookie('Token')
        }

        const data = []
        for (let x = 0; x < respuestas.length; x++) {
            data.push(questionario.preguntas[x].respuestas[respuestas[x]].pk)
        }
        
        const response = await axios.post(`${process.env.API_URL}/questionario/2/validate/`,
            data,
            { headers }
        )

        if (response.status === 200) {

            console.log(response)
    
            return response.data.resultado
        } else {
            console.log('error')
            return 0
        }
    }

    return {
        questionario,
        handleValidateAnswers
    }
}

export default GetEverythingCuestionario