import React from 'react';
import {Line} from 'react-chartjs-2';

const TalentChartBlock = (props) => {
  return(
    <Line data={data} />
  );
}

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Job Applicants Jan - Dec 2016',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(106,150,210,0.4)',
      borderColor: 'rgba(106,150,210,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(106,150,210,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(106,150,210,1)',
      pointHoverBorderColor: 'rgba(106,150,210,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};

export default TalentChartBlock;
