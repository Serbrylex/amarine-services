import relateIconToName from '@services/relateIconToName'

import { useState, useEffect } from 'react'

const useData = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    setData([
      {
        title: 'Dashboard',
        link: '/',
        icons: relateIconToName('AssessmentOutlinedIcon'), 
        color: 'primary',
        elements: [{
            title: 'Redes sociales',
            link: '/dashboard/social-media/',
            icons: null, 
            color: 'primary'
          },
          {
            title: 'Sucursal Tabasco',
            link: '/dashboard/tabasco/',
            icons: null, 
            color: 'primary'
          },
          {
            title: 'Sucursal Tamaulipas 1',
            link: '/dashboard/tamaulipas-1/',
            icons: null, 
            color: 'primary'
          },
          {
            title: 'Sucursarl Campeche',
            link: '/dashboard/campeche/',
            icons: null, 
            color: 'primary'
          },
          {
            title: 'Sucursal Veracruz',
            link: '/dashboard/veracruz/',
            icons: null, 
            color: 'primary'
          },
          {
            title: 'Sucursal Veracruz 2',
            link: '/dashboard/veracruz-2/',
            icons: null, 
            color: 'primary'
          },
          {
            title: 'Sucursal Tamaulipas 2',
            link: '/dashboard/tamaulipas-2/',
            icons: null, 
            color: 'primary'
          }
        ]},
        {
          title: 'Empleados',
          link: '/empleados',
          icons: relateIconToName('AssignmentIndOutlinedIcon'), 
          color: 'primary',
          elements: [
            {
              title: 'Pase de Lista',
              link: '/empleados/lista',
              icons: null, 
              color: 'primary'
            },
            {
              title: 'Dashboard',
              link: '/empleados',
              icons: null, 
              color: 'primary'
            },
            {
              title: 'Evaluación',
              link: '/evaluacion/',
              icons: null, 
              color: 'primary'
            },
            {
              title: 'Resultados',
              link: '/evaluacion/resultados/1/',
              icons: null, 
              color: 'primary'
            },
          ]
        },
        {
          title: 'Encuestas',
          link: '/encuestas',
          icons: relateIconToName('QuizIcon'), 
          color: 'primary',
          elements: [
            {
              title: 'Practicas RH',
              link: '/encuestas/practicas-rh/',
              icons: null, 
              color: 'primary'
            },
            {
              title: 'Encuesta a colaboradores',
              link: '/encuestas/colaboradores/',
              icons: null, 
              color: 'primary'
            },
            {
              title: 'Encuesta a jefes de area',
              link: '/encuestas/jefes-area',
              icons: null, 
              color: 'primary'
            }
          ]
        }
    ])
    
  }, [])

  return { data }
}

export default useData