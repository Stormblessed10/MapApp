import { useState } from "react";

export function useGeolocation() {
    const [isLoading, setIsloading] = useState(false);
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    function getPosition() {
        if (!navigator.geolocation) return setError("Error");

        setIsloading(true);
        navigator.geolocation.getCurrentPosition(pos => {
            setPosition({lat: pos.coords.latitude, lng: pos.coords.longitude})
            setIsloading(false);
        }, error => {
            setError(error.message);
            setIsloading(false);
        });
    }
    return {isLoading, position, error, getPosition};
}