import relateIconToName from '@services/relateIconToName'

import { useState, useEffect } from 'react'

const useData = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    setData([
      {
        title: 'Dashboard',
        link: '/#',
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
          link: '/#',
          icons: relateIconToName('AssignmentIndOutlinedIcon'), 
          color: 'primary',
          elements: [
            {
              title: 'Lista',
              link: '#',
              icons: null, 
              color: 'primary'
            },
            {
              title: 'Productividad',
              link: '#',
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
            {
              title: 'Bajas del personal',
              link: '#',
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