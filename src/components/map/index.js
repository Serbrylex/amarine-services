import { MapContainer, TileLayer } from 'react-leaflet' 

import React, {useEffect} from 'react'
import { Marker } from 'react-leaflet'
import { Box, Typography  } from '@mui/material'

import L from 'leaflet'

import 'leaflet/dist/leaflet.css'

const IconLocation = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/640px-Google_Maps_pin.svg.png',
    iconRetinaUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/640px-Google_Maps_pin.svg.png',
    iconAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: [15, 20],
    className: 'leaflet-venue-icon'
})

const Markers = ({ location }) => (
    <Marker position={location} icon={IconLocation} />
)

const Map = () => {

    return (
        <MapContainer center={[18, -92]} zoom={4}>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers location={[18.003511574398956, -92.98362654472939]} />
            <Markers location={[22.26548427983087, -97.87491935447295]} />
            <Markers location={[18.681406437828855, -91.74897796829059]} />
            <Markers location={[20.538383292017386, -97.39254363418814]} />
            <Markers location={[26.0842084874065, -98.31444467156702]} />
            <Markers location={[19.17227844429708, -96.22513406341882]} />
        </MapContainer>
    )
}

export default Map