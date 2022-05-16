/* global google */
/* eslint-disable no-undef */
import React from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const Maps = (props) => {

    const center = useMemo(() => ({ lat: props.coordinates[0], lng: props.coordinates[1] }), [google]);

    const isLoaded = useLoadScript({
        googleMapsApiKey: 'AIzaSyAectTvdzip71aBFMiZwsSpGYcDyyB4uDw'
    })
    
    if(!isLoaded) {
        return (
            <h2>Loading ...</h2>
        )
    }

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
    )
    

}

export default Maps