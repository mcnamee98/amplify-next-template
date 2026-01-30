'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import {parseValue} from "graphql";

// Dummy data - we'll replace this with database data later
const generateDummyData = (count: number, type: string) => {
  return Array.from({ length: count }, (_, i) => {
    switch(type) {
      case 'waveform1':
        return {
          x: i,
          y: (Math.random() - .5) * 10,
          z: (Math.random() - .5) * 10,
          a: (Math.random() - .5) * 10,
          b: (Math.random() - .5) * 10 ,
        };
      case 'waveform2':
        return {
          x: i,
          y: (Math.random() - .5) * 11,
          z: (Math.random() - .5) * 12,
          a: (Math.random() - .5) * 9,
          b: (Math.random() - .5) * 8 ,
        };
      case 'voltage':
        return {
          x: i,
          y: (Math.random() - .4) * 10,
          z: (Math.random() - .6) * 10,
          a: (Math.random() - .3) * 10,
          b: (Math.random() - .7) * 10 ,
        };
      case 'current':
        return {
          x: i,
          y: Math.random() * 5,
          z: Math.random() * 2,
          a: Math.random() * 0.5,
          b: Math.random() * 10,
        };
      case 'temperature':
        return {
          x: i,
          y: 20 + Math.random() * 10,
          z: 15 + Math.random() * 15,
          a: 0 + Math.random() * 40,
          b: -10 + Math.random() * 20,
        };
      default:
        return {
          x: i,
          y: Math.random() * 100,
          z: Math.random() * 50 + 25,
          a: Math.random(),
          b: Math.random() - 1,
        };
    }
  });
};

// Define which data keys each subplot should display
const subplotConfig = [
  { dataKey: 'z', color: '#000000', name: 'Ch1' },
  { dataKey: 'z', color: '#000000', name: 'Ch2' },
  { dataKey: 'b', color: '#000000', name: 'Ch3' },
  { dataKey: 'z', color: '#000000', name: 'Ch4' },
  { dataKey: 'y', color: '#000000', name: 'Ch5' },
  { dataKey: 'b', color: '#000000', name: 'Ch6'  },
  { dataKey: 'z', color: '#000000', name: 'Ch7'  },
  { dataKey: 'y', color: '#000000', name: 'Ch8'  },
  { dataKey: 'b', color: '#000000', name: 'Ch9'  },
  { dataKey: 'z', color: '#000000', name: 'Ch10'  },
  { dataKey: 'y', color: '#000000', name: 'Ch11'  },
  { dataKey: 'b', color: '#000000', name: 'Ch12'  },
  { dataKey: 'z', color: '#000000', name: 'Ch13'  },
  { dataKey: 'y', color: '#000000', name: 'Ch14'  },
  { dataKey: 'b', color: '#000000', name: 'Ch15'  },
  { dataKey: 'z', color: '#000000', name: 'Ch16'  },
  { dataKey: 'y', color: '#000000', name: 'Ch17'  },
  { dataKey: 'b', color: '#000000', name: 'Ch18'  },
  { dataKey: 'a', color: '#000000', name: 'Ch19' ,},
  { dataKey: 'a', color: '#000000', name: 'Ch20' , showXAxis: true}
  , // Last one shows X axis
];

// Define the x-positions for each marker
const typeAMarkerPositions = {
  marker1: 50,
  marker2: 150,
  marker3: 250,
};

const typeBMarkerPositions = {
  marker1: 100,
  marker2: 200,
  marker3: 300,
};

export default function PlotPage() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numPoints, setNumPoints] = useState(500);
  const [voltage, setVoltage] = useState(5);
  const [dataType, setDataType] = useState('waveform1');
  const [showTypeAMarkers, setShowTypeAMarkers] = useState({
    marker1: false,
    marker2: false,
    marker3: false,
        });

  const [showTypeBMarkers, setShowTypeBMarkers] = useState({
    marker1: false,
    marker2: false,
    marker3: false,
});
  const handleLoadData = () => {
    setIsLoading(true);
    // Simulate data loading delay
    setTimeout(() => {
      setData(generateDummyData(numPoints, dataType));
      setIsLoading(false);
    }, 50);
  };

  return (
  <div
      style={{ padding: 'auto',
      maxWidth: '1400px',
      margin: 'auto',
      maxHeight: '85vh',
      width: '100%',
      boxSizing: 'border-box'}}
  >

      <h3 style={{ margin: '20 0 0 0' }}>WAVEFRONT DEMO</h3>

      {/* Controls Section */}
      <div style={{
        marginBottom: '20px',
        display: 'flex',
          padding: '0 0 0 0',
        // alignItems: 'center',
          alignItems: 'fixed',
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
          <label htmlFor="numPoints" style={{ fontWeight: '500' }}> Number of Points: </label>
             <input id="numPoints"
                    type="number"
                    min="100"
                    max="1000"
                    value={numPoints}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value >= 100 && value <= 1000) {
                            setNumPoints(value);
                            }
                        }}
                    style={{
                        padding: '4px 6px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        width: '80px',
                        fontSize: '14px'
                    }}
                />
            </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="VoltageScale" style={{ fontWeight: '500' }}> Voltage Scale: </label>
              <input  id="VoltageScale"
                      type="number"
                      min="1"
                      max="10000"
                      value={voltage}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value >= 1 && value <= 10000) {
                        setVoltage(value);
                        }
                      }}
                    style={{
                        padding: '4px 6px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      width: '80px',
                      fontSize: '14px'
                      }}
              />
          </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

          <label htmlFor="DataType" style={{ fontWeight: '500' }}> Select Data Type: </label>
              <select  id="DataType"
                      value={dataType}
                        onChange={(e) => {
                            const newDataType = e.target.value;
                            setDataType(newDataType);
                            // Automatically reload data when datatype changes
                            if (data.length > 0) {  // Only reload if data is already loaded
                                setIsLoading(true);
                                setTimeout(() => {
                                    setData(generateDummyData(numPoints, newDataType));
                                    setIsLoading(false);
                                }, 50);
                            }
                        }}
                    style={{
                        padding: '4px 6px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      width: '200px',
                      cursor: 'pointer',
                      fontSize: '14px'
                      }}
              >
                  <option value="waveform1">Waveform 1</option>
                  <option value="waveform2">Waveform 2</option>
                  <option value="voltage">Voltage Data</option>
                  <option value="current">Current Data</option>
                  <option value="temperature">Temperature Data</option>
              </select>
          </div>

        <button
        onClick={handleLoadData}
        disabled={isLoading}
        style={{
            padding: '4px 8px',
            backgroundColor: isLoading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            }}
            >
        {isLoading ? 'Loading...' : 'Update Data & Display Plot'}
        </button>
      </div>

      {data.length > 0 ? (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          display: 'flex',
          minHeight: '700px',  // Add fixed minimum height
          gap: '15px',
          flexShrink: 0
        }}>
          {/* Left side - Plot area */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', flexShrink:0}}>
            <h2 style={{ margin: '0 0 15px 0' }}> EEG Data </h2>
            <div style={{ width: '1150px', height: '600px', display: 'flex', flexDirection: 'column', flexShrink: 0  // Prevent shrinking during updates
                }}>
                  {subplotConfig.map((config, index) => (
                    <div key={index} style={{ flex: 1, minHeight: 0 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis
                            dataKey="x"
                            hide={!config.showXAxis}
                          />
                          <YAxis domain={[-voltage, voltage]} allowDataOverflow={true} label={{value: config.name, position: 'middle', fill: 'black', fontSize: 8}}
                                 fontSize={8}
                          />
                          <Line
                            type="monotone"
                            dataKey={config.dataKey}
                            stroke={config.color}
                            dot={false}
                            strokeWidth={1}
                            isAnimationActive={false}  // Disable animation to prevent flash

                          />

                          {/* Type A Markers (Blue) */}
                          {showTypeAMarkers.marker1 && (
                            <ReferenceLine
                              x={typeAMarkerPositions.marker1}
                              stroke="#0066ff"
                              strokeWidth={2}
                              strokeDasharray="3 3"
                            />
                          )}
                          {showTypeAMarkers.marker2 && (
                            <ReferenceLine
                              x={typeAMarkerPositions.marker2}
                              stroke="#0066ff"
                              strokeWidth={2}
                              strokeDasharray="3 3"
                            />
                          )}
                          {showTypeAMarkers.marker3 && (
                            <ReferenceLine
                              x={typeAMarkerPositions.marker3}
                              stroke="#0066ff"
                              strokeWidth={2}
                              strokeDasharray="3 3"
                            />
                          )}

                          {/* Type B Markers (Red) */}
                          {showTypeBMarkers.marker1 && (
                            <ReferenceLine
                              x={typeBMarkerPositions.marker1}
                              stroke="#ff0000"
                              strokeWidth={2}
                              strokeDasharray="5 5"
                            />
                          )}
                          {showTypeBMarkers.marker2 && (
                            <ReferenceLine
                              x={typeBMarkerPositions.marker2}
                              stroke="#ff0000"
                              strokeWidth={2}
                              strokeDasharray="5 5"
                            />
                          )}
                          {showTypeBMarkers.marker3 && (
                            <ReferenceLine
                              x={typeBMarkerPositions.marker3}
                              stroke="#ff0000"
                              strokeWidth={2}
                              strokeDasharray="5 5"
                            />
                          )}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ))}
                </div>

          <div style={{ marginTop: '20px' }}>
              <p><strong>Data Points:</strong> {data.length}</p>
              <p style={{ fontSize: '12px', color: '#666' }}>
                This is dummy data. Future versions will pull from the database.
              </p>
            </div>
          </div>


          {/* Right side - Event Markers */}
          <div style={{
            width: '220px',
            flexShrink: 0,  // Prevent sidebar from shrinking
            padding: '15px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignSelf: 'flex-start'  // Prevent stretching

          }}>
            <div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
                Ground Truth Events
              </h3>
              <div style={{
                width: '30px',
                height: '3px',
                backgroundColor: '#0066ff',
                marginBottom: '10px',
                borderRadius: '2px'
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showTypeAMarkers.marker1}
                    onChange={(e) => setShowTypeAMarkers({
                      ...showTypeAMarkers,
                      marker1: e.target.checked
                    })}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>A1 (t={typeAMarkerPositions.marker1})</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showTypeAMarkers.marker2}
                    onChange={(e) => setShowTypeAMarkers({
                      ...showTypeAMarkers,
                      marker2: e.target.checked
                    })}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>A2 (t={typeAMarkerPositions.marker2})</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showTypeAMarkers.marker3}
                    onChange={(e) => setShowTypeAMarkers({
                      ...showTypeAMarkers,
                      marker3: e.target.checked
                    })}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>A3 (t={typeAMarkerPositions.marker3})</span>
                </label>
              </div>
            </div>

            <div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
                Detections
              </h3>
              <div style={{
                width: '30px',
                height: '3px',
                backgroundColor: '#ff0000',
                marginBottom: '10px',
                borderRadius: '2px'
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showTypeBMarkers.marker1}
                    onChange={(e) => setShowTypeBMarkers({
                      ...showTypeBMarkers,
                      marker1: e.target.checked
                    })}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>B1 (t={typeBMarkerPositions.marker1})</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showTypeBMarkers.marker2}
                    onChange={(e) => setShowTypeBMarkers({
                      ...showTypeBMarkers,
                      marker2: e.target.checked
                    })}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>B2 (t={typeBMarkerPositions.marker2})</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showTypeBMarkers.marker3}
                    onChange={(e) => setShowTypeBMarkers({
                      ...showTypeBMarkers,
                      marker3: e.target.checked
                    })}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px' }}>B3 (t={typeBMarkerPositions.marker3})</span>
                </label>
              </div>
            </div>
          </div>
  </div>
) : (
  <div style={{
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #ddd'
  }}>
    <p style={{ color: '#666' }}>Click the button above to load and display data</p>
  </div>
)}
    </div>
  );
}