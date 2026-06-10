// DogFact Component
export const DogFact = ({ fact }) => {

  if (!fact) {
    return <div className="loading">Fetching supercute dogfacts... 🐾</div>
  }

  const cleanFact = fact.attributes.body

  return (
    <div className="dog-fact-card">
      <p>{cleanFact}</p>
    </div>
  )
};
