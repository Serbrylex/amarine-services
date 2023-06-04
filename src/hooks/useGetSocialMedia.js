import { useState, useEffect } from 'react'
import axios from 'axios'
import getCookie from '@services/getCookie'

const GetSocialMedia = () => {
    
    const [redes, setRedes] = useState(undefined)
    const [bigTableData, setBigTableData] = useState(undefined)

    useEffect(()=>{
        const headers = {
            'Authorization': getCookie('Token')
        }
        axios.get(`${process.env.API_URL}/sucursal/redes/`, { headers })
        .then(response => {
            if (response.status === 200) {
                const data = {}
                console.log(response)
                response.data.map(redData => {
                    let monthPlusName = [redData.red_name, redData.fecha.split('-')[1]]
                    if (monthPlusName in data) {
                        data[monthPlusName].cantidad += redData.cantidad
                    } else {
                        data[monthPlusName] = redData
                    }
                })
                setRedes(data)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    useEffect(()=>{
        if (redes) {
            const data = {
                rows: [
                    {
                        image: '/images/facebook.png',
                        data: []
                    },
                    {
                        image: '/images/Instagram.png',
                        data: []
                    },
                    {
                        image: '/images/tik-tok.png',
                        data: []
                    }
                ],
                colums: [
                    'Redes sociales',
                    'Ene',
                    'Feb',
                    'Mar',
                    'Abr',
                    'May',
                    'Jun',
                    'Jul',
                    'Ago',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dic'
                ]
            }
            const redesParsed = Object.keys(redes)
            redesParsed.map((key)=>{
                const keyRedName = key.toString().split(',')[0]
                switch (keyRedName) {
                    case 'Facebook':
                        data.rows[0].data.push(redes[key].cantidad)
                        break;
                    case 'Instagram':
                        data.rows[1].data.push(redes[key].cantidad)
                        break;
                    case 'Tiktok':
                        data.rows[2].data.push(redes[key].cantidad)
                        break;
                    default:
                        break;
                }
            })
            setBigTableData(data)
        }
    }, [redes])

    return {
        redes,
        bigTableData
    }
}

export default GetSocialMedia