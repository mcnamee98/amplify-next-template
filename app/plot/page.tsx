'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data - we'll replace this with database data later
const generateDummyData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: i,
    y: Math.random() * 100,
    z: Math.random() * 50 + 25,
    a: Math.random(),
    b: (Math.random() - 0.5) * 10,
  }));
};

export default function PlotPage() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numPoints, setNumPoints] = useState(20);
  const [voltage, setVoltage] = useState(5);

  const handleLoadData = () => {
    setIsLoading(true);
    // Simulate data loading delay
    setTimeout(() => {
      setData(generateDummyData(numPoints));
      setIsLoading(false);
    }, 50);
  };

  return (
  <div
      style={{ padding: 'auto',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'}}>

      <h1 style={{ margin: '0 0 0 0' }}>Data Visualization</h1>

      {/* Controls Section */}

      <div style={{
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                        padding: '8px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        width: '80px',
                        fontSize: '14px'
                    }}
                />
            </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="VoltageScale" style={{ fontWeight: '500' }}>
            Voltage Scale:
          </label>
          <input
            id="VoltageScale"
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
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '80px',
              fontSize: '14px'
            }}
          />
        </div>
       <button
        onClick={handleLoadData}
        disabled={isLoading}
        style={{
          padding: '10px 10px',
          backgroundColor: isLoading ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          fontSize: '16px',
        }}
      >
        {isLoading ? 'Loading...' : 'Load Data & Display Plot'}
       </button>
      </div>

      {data.length > 0 ? (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h2 style={{ margin: '0 0 15px 0' }}>Sample Line Chart</h2>
          <div style={{ width: '1200px', height: '600px' }}>
              <ResponsiveContainer width="100%" height="5%">
          {/*<ResponsiveContainer width={1200} height={30}>*/}

            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6} />
              <Line type="monotone"  dataKey="b"  stroke="#8884d8" dot={false} name="Series 1" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch2'} fontSize={6} />
                <Line type="monotone"  dataKey="b"  stroke="#8884d8" dot={false} name="Series 2" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch3'} fontSize={6} />
              <Line type="monotone" dataKey="b" stroke="#8884d8" dot={false} name="Series 3" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch4'} fontSize={6} />
              <Line type="monotone" dataKey="b" stroke="#8884d8" dot={false} name="Series 4" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis   dataKey="x" hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch5'} fontSize={6} />
              <Line type="monotone" dataKey="b" stroke="#8884d8" dot={false} name="Series 5" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch6'} fontSize={6} />
              <Line type="monotone" dataKey="b" stroke="#8884d8" dot={false} name="Series 6" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis  dataKey="x"  hide={true} />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch7'} fontSize={6}/>
              <Line  type="monotone" dataKey="b" stroke="#8884d8" dot={false} name="Series 7" strokeWidth={1}/>
            </LineChart>

            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch1'} fontSize={6}
              />
              <Line
                type="monotone"
                dataKey="b"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
            </LineChart>
            <LineChart data={data}>
              {/*<CartesianGrid strokeDasharray="3 3" />*/}
              <XAxis
                dataKey="x"
                // label={{ value: 'X Axis', position: 'insideBottom', offset: -5 }}
              />
              <YAxis domain = {[-voltage, voltage]} allowDataOverflow={true} label={'Ch19'} fontSize={6}
              />
              {/*<Tooltip />*/}
              {/*<Legend />*/}
              <Line
                type="monotone"
                dataKey="a"
                stroke="#8884d8"
                dot={false}
                name="Series 1"
                strokeWidth={1}
              />
              {/*<Line*/}
              {/*  type="monotone"*/}
              {/*  dataKey="z"*/}
              {/*  dot={false}*/}
              {/*  stroke="#82ca9d"*/}
              {/*  name="Series 2"*/}
              {/*  strokeWidth={1}*/}
              {/*/>*/}
            </LineChart>
          </ResponsiveContainer>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p><strong>Data Points:</strong> {data.length}</p>
            <p style={{ fontSize: '12px', color: '#666' }}>
              This is dummy data. Future versions will pull from the database.
            </p>
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