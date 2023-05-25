import { MapContainer, TileLayer } from 'react-leaflet' 

import { Marker } from 'react-leaflet'

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


const SingleMarketMap = ({ coords }) => {
    console.log(coords)
    return (
        <MapContainer center={[18, -92]} zoom={5}>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers location={coords} />
        </MapContainer>
    )
}

export default SingleMarketMap