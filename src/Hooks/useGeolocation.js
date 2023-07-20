import { useState } from "react";

export function useGeolocation(defalult = null) {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(defalult);
    const [error, setError] = useState(null);

    function getPosition() {
        console.log('works')
        if (!navigator.geolocation) return setError("Error");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(pos => {
            setPosition({lat: pos.coords.latitude, lng: pos.coords.longitude})
            setIsLoading(false);
        }, error => {
            setError(error.message);
            setIsLoading(false);
        });
    }
    return {isLoading, position, error, getPosition};
}