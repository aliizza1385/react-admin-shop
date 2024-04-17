
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>This is a report about the amount of sales</CardContent>
        <FruitChart/>
    </Card>
);

import { ListBase, WithListContext } from 'react-admin';

const FruitChart = () => (
    <ListBase resource="kpi" disableSyncWithLocation perPage={100}>
        <WithListContext
            render={({ data }) => (
                <BarChart
                width={800}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
            
            )}
        />
    </ListBase>
);