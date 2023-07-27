// react
import { useState, useEffect } from 'react';

// next
import { useRouter } from 'next/router'

// components
import Header from '@components/header'
import QuestionarioLayout from '@layouts/questionarioLayout'

// mui
import { Box, Typography, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import GetEverythingCuestionario from '@hooks/useGetEverythingCuestionario'


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Progressbar = ({ progress }) =>  (
    <BorderLinearProgress variant="determinate" value={progress} />
)

const posibilities = ['a', 'b', 'c', 'd', 'e']
const Respuesta = ({ num, text, callback, contadorPreguntas, currentAnswer }) => (
    <Box 
        sx={{ 
            width: '100%', minHeight: '40px', border: currentAnswer ? '1px solid #33B1FF' : '1px solid grey', borderRadius: '5px',
            display: 'flex', margin: '10px 0'
        }} 
        onClick={()=>callback(num, contadorPreguntas)}
    >
        <Typography sx={{
            fontWeight: 'bold',
            width: '5%',
            borderRadius: '5px 0 0 5px',
            backgroundColor: currentAnswer ? '#33B1FF' : '#24385B',
            color: currentAnswer ? 'black' : 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>{posibilities[num]}</Typography>
        <Typography sx={{ padding: '5px 5px 5px 10px', display: 'flex', alignItems: 'center', width: '95%' }}>{text}</Typography>
    </Box>
)

const Evaluacion = () => {
    const [preview, setPreview] = useState(false)
    const [contadorPreguntas, setContadorPreguntas] = useState(0)
    const [isChangingAnswer, setIsChangingAnswer] = useState(false)
    const [respuestas, setRespuestas] = useState([])

    const router = useRouter()

    const { questionario, handleValidateAnswers } = GetEverythingCuestionario()

    const nextQuestion = () => {
        if (questionario.preguntas.length > contadorPreguntas+1) {
            setContadorPreguntas(contadorPreguntas+1)
        } else {
            // terminaste, validación
        }
    }

    const handleSelectAnswer = (num, contadorPreguntas) => {
        let newRespuestas = [...respuestas]
        if (respuestas.length > contadorPreguntas) {
            newRespuestas[contadorPreguntas] = num
        } else {
            newRespuestas.push(num)
        }
        setRespuestas(newRespuestas)
    }

    const handlePreviewExam = () => {
        setContadorPreguntas(questionario.preguntas.length - 1)
        setPreview(true)
    }

    const handleChangeAnswer = (ind) => {
        setPreview(false)
        setContadorPreguntas(ind)
        setIsChangingAnswer(true)
    }

    const handleSendAnswers = async () => {

        alert('Excelente, tus respuestas han sido enviadas')
        router.push('/evaluacion/resultados/3/')
    }

    if (!questionario) return null

    if (preview) {
        return (
            <QuestionarioLayout>
                <Box sx={{ height: 'auto', width: '100%', display: 'flex', 
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    padding: '50px 20%'
                }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', width: '100%', marginBottom: '10px' }}>
                            <Typography sx={{ fontWeight: '600' }}>Encuesta 360 AMarine Services</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ marginRight: '10px' }}>Pregunta</Typography>
                                <Typography>{contadorPreguntas + 1} de {questionario.preguntas.length}</Typography>
                            </Box>
                        </Box>  
                        <Progressbar progress={(100/questionario.preguntas.length) * (contadorPreguntas+1)} />
                    </Box>

                    <Box sx={{ width: '100%', height: 'auto', color: 'white' }}>
                        <Typography 
                            component='h1' 
                            sx={{ fontWeight: 'bold', fontSize: '30px', margin: '30px 0' }}
                        >
                            Estas son tus respuestas
                        </Typography>

                        <Box>
                            {questionario.preguntas.map((pregunta, ind)=>(
                                <Box 
                                    sx={{ 
                                        display: 'flex', flexDirection: 'column',
                                        margin: '30px 0'
                                    }} 
                                    key={ind}
                                >
                                    <Typography><span>{ind + 1}.</span> {pregunta.pregunta}</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#24385B',
                                        border: '1px solid white',
                                        borderRadius: '5px',
                                        width: '100%',
                                        minHeight: '40px',
                                        padding: '5px 10px',
                                        marginTop: '5px'
                                    }}>
                                        <Typography sx={{ color: 'white' }}>{pregunta.respuestas[respuestas[ind]]}</Typography>
                                        <Typography sx={{ color: '#33B1FF', cursor: 'pointer' }} onClick={()=>handleChangeAnswer(ind)}>
                                            CAMBIAR
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ 
                    width: '100%', height: '15vh', backgroundColor: '#0C1633',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0 5vw'
                }}>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            fontSize: '12px', fontWeight: 'bold', marginTop: '20px',
                            backgroundColor: '#33B1FF', marginLeft: 'auto'
                        }}
                        onClick={handleSendAnswers}
                    >
                        {'✓ CALIFICAR RESPUESTAS'}
                    </Button>
                </Box>
            </QuestionarioLayout>
        )
    }


    return (
        <QuestionarioLayout>
            {/* header */}
            <Box sx={{ minHeight: '75vh', width: '100%', display: 'flex', 
                flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '50px 20%'
            }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', width: '100%', marginBottom: '10px' }}>
                        <Typography sx={{ fontWeight: '600' }}>Encuesta 360 AMarine Services</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ marginRight: '10px' }}>Pregunta</Typography>
                            <Typography>{contadorPreguntas + 1} de {questionario.preguntas.length}</Typography>
                        </Box>
                    </Box>  
                    <Progressbar progress={(100/questionario.preguntas.length) * (contadorPreguntas+1)} />
                </Box>

                <Box sx={{ width: '100%', height: 'auto', color: 'white' }}>
                    <Typography 
                        component='h1' 
                        sx={{ fontWeight: 'bold', fontSize: '30px', margin: '30px 0' }}
                    >
                        {questionario.preguntas[contadorPreguntas].pregunta}
                    </Typography>
                    
                    <Box>
                        {questionario.preguntas[contadorPreguntas].respuestas.map((res, ind)=>(
                            <Respuesta 
                                key={ind} num={ind} text={res} callback={handleSelectAnswer} 
                                contadorPreguntas={contadorPreguntas} 
                                currentAnswer={respuestas[contadorPreguntas] !== undefined && respuestas[contadorPreguntas] === ind}
                            />
                        ))}
                    </Box>

                </Box>
            </Box>

            <Box sx={{ 
                width: '100%', height: '15vh', backgroundColor: '#0C1633',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0 5vw'
            }}>
                <Button 
                    variant="contained" sx={{ fontSize: '12px', fontWeight: 'bold', marginTop: '20px', backgroundColor: '#33B1FF', marginRight: 'auto' }}
                    onClick={nextQuestion}
                >
                    SALTAR PREGUNTA
                </Button>
                
                {isChangingAnswer || questionario.preguntas.length == contadorPreguntas + 1 ? 
                    <Button 
                        variant="contained" sx={{ fontSize: '12px', fontWeight: 'bold', marginTop: '20px', backgroundColor: '#33B1FF', marginLeft: 'auto' }}
                        onClick={handlePreviewExam}
                    >
                        {'FINALIZAR'}
                    </Button>
                    :
                    <Button 
                        variant="contained" sx={{ fontSize: '12px', fontWeight: 'bold', marginTop: '20px', backgroundColor: '#33B1FF', marginLeft: 'auto' }}
                        onClick={nextQuestion}
                    >
                        {'> SIGUIENTE'}
                    </Button>
                }
            </Box>
        </QuestionarioLayout>
    )
}

export default Evaluacion