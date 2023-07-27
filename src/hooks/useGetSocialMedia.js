import { useState, useEffect } from 'react'
import axios from 'axios'
import getCookie from '@services/getCookie'

const GetSocialMedia = () => {
    
    const [redes, setRedes] = useState(undefined)
    const [bigTableData, setBigTableData] = useState(undefined)

    useEffect(()=>{
        const social = [
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-01-08",
                "cantidad": 179
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-02-04",
                "cantidad": 200
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-03-28",
                "cantidad": 142
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-04-06",
                "cantidad": 192
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Tiktok",
                "fecha": "2023-05-04",
                "cantidad": 188
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-06-01",
                "cantidad": 91
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-07-18",
                "cantidad": 176
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Facebook",
                "fecha": "2023-01-23",
                "cantidad": 162
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Facebook",
                "fecha": "2023-09-03",
                "cantidad": 93
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-10-27",
                "cantidad": 191
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Instagram",
                "fecha": "2023-11-27",
                "cantidad": 176
            },
            {
                "sucursal": {
                    "nombre": "Tabasco",
                    "latitud": 18.003511574398956,
                    "longitud": -92.98362654472939
                },
                "red_name": "Tiktok",
                "fecha": "2023-12-25",
                "cantidad": 36
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Tiktok",
                "fecha": "2023-01-03",
                "cantidad": 95
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Instagram",
                "fecha": "2023-02-21",
                "cantidad": 146
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Instagram",
                "fecha": "2023-03-20",
                "cantidad": 135
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Tiktok",
                "fecha": "2023-04-08",
                "cantidad": 98
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Instagram",
                "fecha": "2023-05-19",
                "cantidad": 126
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Tiktok",
                "fecha": "2023-06-07",
                "cantidad": 63
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Facebook",
                "fecha": "2023-07-24",
                "cantidad": 145
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Instagram",
                "fecha": "2023-08-21",
                "cantidad": 30
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Facebook",
                "fecha": "2023-09-11",
                "cantidad": 104
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Facebook",
                "fecha": "2023-10-11",
                "cantidad": 100
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Tiktok",
                "fecha": "2023-11-05",
                "cantidad": 67
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 1",
                    "latitud": 22.26548427983087,
                    "longitud": -97.87491935447295
                },
                "red_name": "Tiktok",
                "fecha": "2023-12-08",
                "cantidad": 93
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Instagram",
                "fecha": "2023-01-24",
                "cantidad": 187
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Facebook",
                "fecha": "2023-02-27",
                "cantidad": 79
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Tiktok",
                "fecha": "2023-03-28",
                "cantidad": 78
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Instagram",
                "fecha": "2023-04-19",
                "cantidad": 39
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Tiktok",
                "fecha": "2023-05-07",
                "cantidad": 44
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Tiktok",
                "fecha": "2023-06-13",
                "cantidad": 77
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Tiktok",
                "fecha": "2023-07-21",
                "cantidad": 66
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Facebook",
                "fecha": "2023-08-04",
                "cantidad": 69
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Facebook",
                "fecha": "2023-09-25",
                "cantidad": 51
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Facebook",
                "fecha": "2023-10-23",
                "cantidad": 162
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Tiktok",
                "fecha": "2023-11-26",
                "cantidad": 157
            },
            {
                "sucursal": {
                    "nombre": "Campeche",
                    "latitud": 18.681406437828855,
                    "longitud": -91.74897796829059
                },
                "red_name": "Tiktok",
                "fecha": "2023-12-01",
                "cantidad": 73
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Instagram",
                "fecha": "2023-01-20",
                "cantidad": 88
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Tiktok",
                "fecha": "2023-02-14",
                "cantidad": 136
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Tiktok",
                "fecha": "2023-03-01",
                "cantidad": 33
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Instagram",
                "fecha": "2023-04-28",
                "cantidad": 124
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Facebook",
                "fecha": "2023-05-09",
                "cantidad": 175
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Facebook",
                "fecha": "2023-06-03",
                "cantidad": 65
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Instagram",
                "fecha": "2023-07-03",
                "cantidad": 32
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Facebook",
                "fecha": "2023-08-06",
                "cantidad": 99
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Tiktok",
                "fecha": "2023-09-23",
                "cantidad": 196
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Tiktok",
                "fecha": "2023-10-05",
                "cantidad": 141
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Instagram",
                "fecha": "2023-11-01",
                "cantidad": 200
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 1",
                    "latitud": 20.538383292017386,
                    "longitud": -97.39254363418814
                },
                "red_name": "Facebook",
                "fecha": "2023-12-23",
                "cantidad": 68
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Instagram",
                "fecha": "2023-01-13",
                "cantidad": 88
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Facebook",
                "fecha": "2023-02-20",
                "cantidad": 51
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Facebook",
                "fecha": "2023-03-08",
                "cantidad": 94
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Facebook",
                "fecha": "2023-04-15",
                "cantidad": 147
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Facebook",
                "fecha": "2023-05-17",
                "cantidad": 132
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Facebook",
                "fecha": "2023-06-16",
                "cantidad": 184
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Tiktok",
                "fecha": "2023-07-23",
                "cantidad": 181
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Tiktok",
                "fecha": "2023-08-22",
                "cantidad": 151
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Instagram",
                "fecha": "2023-09-23",
                "cantidad": 161
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Instagram",
                "fecha": "2023-10-25",
                "cantidad": 133
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Instagram",
                "fecha": "2023-11-14",
                "cantidad": 182
            },
            {
                "sucursal": {
                    "nombre": "Veracruz 2",
                    "latitud": 19.17227844429708,
                    "longitud": -96.22513406341882
                },
                "red_name": "Tiktok",
                "fecha": "2023-12-05",
                "cantidad": 127
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Tiktok",
                "fecha": "2023-01-10",
                "cantidad": 138
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Instagram",
                "fecha": "2023-02-22",
                "cantidad": 56
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Tiktok",
                "fecha": "2023-03-12",
                "cantidad": 190
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Instagram",
                "fecha": "2023-04-24",
                "cantidad": 146
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Tiktok",
                "fecha": "2023-05-20",
                "cantidad": 176
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Instagram",
                "fecha": "2023-06-03",
                "cantidad": 57
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Facebook",
                "fecha": "2023-07-24",
                "cantidad": 58
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Facebook",
                "fecha": "2023-08-10",
                "cantidad": 66
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Facebook",
                "fecha": "2023-09-04",
                "cantidad": 188
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Facebook",
                "fecha": "2023-10-08",
                "cantidad": 104
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Facebook",
                "fecha": "2023-11-06",
                "cantidad": 157
            },
            {
                "sucursal": {
                    "nombre": "Tamaulipas 2",
                    "latitud": 26.0842084874065,
                    "longitud": -98.31444467156702
                },
                "red_name": "Instagram",
                "fecha": "2023-12-23",
                "cantidad": 159
            }
        ]
        const data = {}
        social.map(redData => {
            let monthPlusName = [redData.red_name, redData.fecha.split('-')[1]]
            if (monthPlusName in data) {
                data[monthPlusName].cantidad += redData.cantidad
            } else {
                data[monthPlusName] = redData
            }
        })
        console.log({ data })
        setRedes(data)
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