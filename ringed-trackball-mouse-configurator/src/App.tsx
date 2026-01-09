import "./App.css";
import DeviceSection from "./components/DeviceSection";
import GestureMapping from "./components/GestureMapping";
import HUDSettings from "./components/HUDSettings";
import KeyboardModeEditor from "./components/KeyboardModeEditor";
import LayerEditor from "./components/LayerEditor";

function App() {
  return (
    <main className="container">
      <h1>Ringed Trackball Mouse Configurator</h1>
      <DeviceSection />
      <LayerEditor />
      <GestureMapping />
      <KeyboardModeEditor />
      <HUDSettings />
    </main>
  );
}

export default App;
