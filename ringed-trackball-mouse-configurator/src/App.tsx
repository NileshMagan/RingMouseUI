import "./App.css";
import DeviceSection from "./components/DeviceSection";
import LayerEditor from "./components/LayerEditor";

function App() {
  return (
    <main className="container">
      <h1>Ringed Trackball Mouse Configurator</h1>
      <DeviceSection />
      <LayerEditor />
    </main>
  );
}

export default App;
