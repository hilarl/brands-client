import React from 'react';
import {Polar} from 'react-chartjs-2';

const BrandChartBlock = (props) => {
  return(
    <Polar data={data2} />
  );
}

const data2 = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#F87186',
      '#5FD0B7',
      '#FFAA75',
      '#E7E9ED',
      '#6A96D2'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Engineers',
    'Business',
    'Marketing',
    'Sales',
    'HR'
  ]
};

export default BrandChartBlock;
