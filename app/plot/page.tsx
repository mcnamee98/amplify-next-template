'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data - we'll replace this with database data later
const generateDummyData = () => {
  return Array.from({ length: 1000 }, (_, i) => ({
    x: i,
    y: Math.random() * 100,
    z: Math.random() * 50 + 25,
    a: Math.random(),
    b: Math.random() - 23,
  }));
};

export default function PlotPage() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadData = () => {
    setIsLoading(true);
    // Simulate data loading delay
    setTimeout(() => {
      setData(generateDummyData());
      setIsLoading(false);
    }, 50);
  };

  return (
  <div style={{ padding: '0px 0px 0px 0px', maxWidth: 'auto', maxHeight: 'auto', margin: '0 auto' }}>
      <h1> Data Visualization</h1>

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
          marginBottom: '20px',
          fontSize: '16px',
        }}
      >
        {isLoading ? 'Loading...' : 'Load Data & Display Plot'}
      </button>

      {data.length > 0 ? (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h2>Sample Line Chart</h2>
          <ResponsiveContainer width={1200} height={30}>
            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis/>
              <Line type="monotone"  dataKey="z"  stroke="#8884d8" dot={false} name="Series 1" strokeWidth={1}/>
            </LineChart>
            <LineChart data={data}>
              <XAxis dataKey="x" hide={true} />
              <YAxis fontSize={'10'}/>
              <Line type="monotone"  dataKey="z"  stroke="#8884d8" dot={false} name="Series 1" strokeWidth={1}/>
            </LineChart>
            <LineChart data={data}>
              <XAxis
                dataKey="x"
                hide={true}
              />
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="z"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="y"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="z"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="y"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="z"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="y"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="z"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="y"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="z"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
              />
              <Line
                type="monotone"
                dataKey="y"
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
              <YAxis
                // label={{ value: 'Chan 1', angle: -90, position: 'center'}}
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
              <YAxis
                // label={{ value: 'Y Axis', angle: -90, position: 'insideLeft' }}
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