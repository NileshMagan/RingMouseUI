// src/components/DeviceSection.tsx
import React from 'react';

const DeviceSection: React.FC = () => {
  return (
    <div className="device-section">
      <h2>Device</h2>
      <div className="device-status">
        <p>Status: <span className="status-connected">Connected</span></p>
        <p>Battery: <span>95%</span></p>
        <p>Firmware: <span>v1.2.3</span></p>
        <p>Active Layer: <span>Default</span></p>
        <p>Signal Strength: <span>Strong</span></p>
      </div>
      <div className="device-actions">
        <button>Disconnect</button>
        <button>Force Resync</button>
        <button>Identify Device</button>
      </div>
    </div>
  );
};

export default DeviceSection;
