// se 'maxRating' non viene attribuito nessun valore ne verrà assegnato uno di default per non incorrere in errore
export default function StarRating({maxRating = 5}) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContainerStyle = {
    display: "flex",
    gap: "4px",
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <span key={index}>S{index + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
