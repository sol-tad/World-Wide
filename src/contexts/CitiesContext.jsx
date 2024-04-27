import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:3000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error in loading  data ...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
}