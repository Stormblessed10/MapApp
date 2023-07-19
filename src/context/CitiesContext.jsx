import { createContext, useState, useEffect } from "react";

const URL = "http://localhost:9000/cities";

const CitiesContext = createContext();

export function CitiesProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false);
    const [cityList, setCityList] = useState([]);
  
    useEffect(() => {
      async function getData() {
          try {
              setIsLoading(true);
              const res = await fetch(URL);
              const data = await res.json();
              setCityList(data);
              setIsLoading(false);
          } catch(err) {
              console.error(err);
          }
      }
      getData();
  }, []);

  return <CitiesContext.Provider value={{isLoading, cityList}}>{children}</CitiesContext.Provider>
}
