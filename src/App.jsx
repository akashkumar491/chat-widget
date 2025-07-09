import Widget from "./Widget";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get('propertyId') || 'default-property';

  return (
    <div>
      <Widget propertyId={propertyId} />
    </div>
  );
}

export default App;
