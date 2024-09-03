'use client'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const Map = () => {
    return (
        <MapContainer className='w-100 h-80' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />
              <Marker icon={L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
                iconSize: [20, 30],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })} position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
        </MapContainer>
    )
}
export default Map