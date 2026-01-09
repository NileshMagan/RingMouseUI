// src/components/LayerEditor.tsx
import React, { useState } from 'react';

interface Layer {
  id: number;
  name: string;
  color: string;
}

const LayerEditor: React.FC = () => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);

  const createNewLayer = () => {
    const newLayer: Layer = {
      id: layers.length + 1,
      name: `Layer ${layers.length + 1}`,
      color: '#ffffff',
    };
    setLayers([...layers, newLayer]);
    setSelectedLayer(newLayer);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedLayer) return;
    const newName = e.target.value;
    const updatedLayer = { ...selectedLayer, name: newName };
    setSelectedLayer(updatedLayer);
    setLayers(
      layers.map((layer) =>
        layer.id === selectedLayer.id ? updatedLayer : layer
      )
    );
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedLayer) return;
    const newColor = e.target.value;
    const updatedLayer = { ...selectedLayer, color: newColor };
    setSelectedLayer(updatedLayer);
    setLayers(
      layers.map((layer) =>
        layer.id === selectedLayer.id ? updatedLayer : layer
      )
    );
  };

  return (
    <div className="layer-editor">
      <div className="layer-list">
        <h2>Layers</h2>
        <ul>
          {layers.map((layer) => (
            <li key={layer.id} onClick={() => setSelectedLayer(layer)}>
              {layer.name}
            </li>
          ))}
        </ul>
        <button onClick={createNewLayer}>Create New Layer</button>
      </div>
      <div className="layer-details">
        {selectedLayer && (
          <>
            <h2>{selectedLayer.name}</h2>
            <div className="form-group">
              <label htmlFor="layer-name">Name</label>
              <input
                type="text"
                id="layer-name"
                value={selectedLayer.name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="layer-color">Color</label>
              <input
                type="color"
                id="layer-color"
                value={selectedLayer.color}
                onChange={handleColorChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LayerEditor;
