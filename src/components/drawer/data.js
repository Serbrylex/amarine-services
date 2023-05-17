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
          title: 'Bajas del personal',
          link: '/cash-management/deposit/',
          icons: null, 
          color: 'primary'
        },
        {
          title: 'Redes sociales',
          link: '/cash-management/drawer-count/',
          icons: null, 
          color: 'primary'
        }
      ]},
      {
        title: 'Empleados',
        link: '/#',
        icons: relateIconToName('AssignmentIndOutlinedIcon'), 
        color: 'primary',
        elements: [{
          title: 'Lista',
          link: '/inventory/adjustments/',
          icons: null, 
          color: 'primary'
        },{
          title: 'Productividad',
          link: '/inventory/count/',
          icons: null, 
          color: 'primary'
  
        }]
      },{
        title: 'Configuración',
        link: '/#',
        icons:  relateIconToName('SettingsOutlinedIcon'), 
        color: 'primary',
        elements: []
      },
      {
        title: 'Cerrar Sesión',
        link: '/projections/',
        icons:  relateIconToName('LogoutOutlinedIcon'),  
        color: 'secondary',
        elements: []
      }])
    
  }, [])

  return { data }
}

export default useData