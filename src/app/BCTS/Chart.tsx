"use client"
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Box from '@mui/material/Box/Box';
import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Typography, useTheme } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const BarChart = (dataChart:any) => {
  const theme=useTheme();
    // const [day, setDay] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setDay(event.target.value as string);
      
    // };
    console.log(dataChart)
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'NAV',
                data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                borderColor: '#fff',
                backgroundColor: '#70AD47',
                order: 2
              }
              
        ]
    })
    setChartOptions({
        plugins: {
            colors:{
                backgroundColor: theme.palette.mode === 'dark' ? '#323232' :'#ececec'
             },
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'THÔNG KÊ GIÁ TRỊ TÀI SẢN RÒNG'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <Paper  sx={{bgcolor:theme.palette.mode === 'dark' ? '#323232' :'#ececec',borderRadius:2,height:400}}>
        <Box display="flex" justifyContent="space-between" paddingTop="10px">
        <Box></Box>
        <Typography component="span" textAlign='center'>
        THÔNG KÊ GIÁ TRỊ TÀI SẢN RÒNG    
        </Typography>
        <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth style={{height:30}}>
        <InputLabel id="demo-simple-select-label">Thời gian</InputLabel>
        <Select
        defaultValue="20"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="Day"
       /* A function that is called when the value of the select changes. */
          // onChange={handleChange}
          sx={{height:30}}
        >
          <MenuItem value="20">20 ngày</MenuItem>
          <MenuItem value="90">90 ngày</MenuItem>
           
        </Select>
      </FormControl>
    </Box>
        </Box>
       <Box height="300px">
       <Bar data={chartData} options={chartOptions} />
       </Box>
       
      </Paper>
    </>
  );
};

export default BarChart;