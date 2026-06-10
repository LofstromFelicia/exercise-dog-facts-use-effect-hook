import { useState, useEffect, use } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // to save dogFact 
  const [dogFact, setDogFact] = useState(null)

  // API end point
  const url = "https://dogapi.dog/api/v2/facts"

  // Function to fetch data
  const fetchDogFact = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()

      setDogFact(json.data[0])
    } catch (error) {
      console.error("Could Not Find Dog Fact:", error)
    }
  }

  useEffect(() => {
    fetchDogFact();
  }, []);

  return (
    <div className="App">
      <DogFact fact={dogFact} />
    </div>
  );
};
