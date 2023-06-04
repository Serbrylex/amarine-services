import { MapContainer, TileLayer } from 'react-leaflet' 

import React from 'react'
import { Marker, Tooltip } from 'react-leaflet'
import { useRouter } from 'next/router'

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

const Markers = ({ children, location }) => (
    <Marker position={location} icon={IconLocation}>
        {children}
    </Marker>
)

const Map = ({ sucursales }) => {

    const router = useRouter()

    if (!sucursales) return null

    return (
        <MapContainer center={[18, -92]} zoom={4}>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sucursales.map((sucursal, idx) => (
                <Markers 
                    location={[sucursal.latitud, sucursal.longitud]} key={idx}
                >
                    <Tooltip 
                        direction="bottom" offset={[0, 20]} opacity={1} 
                    >
                        {sucursal.nombre}
                    </Tooltip>
                </Markers>
            ))}
        </MapContainer>
    )
}

export default Map