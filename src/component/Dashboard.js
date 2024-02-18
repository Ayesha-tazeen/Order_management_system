
import React from 'react';
import Table from './Table';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Dashboard({ sampleData }) {
  return (
    //************************** */ here goes the dashboard for encorporating the table *************************************
    <div className='my-4 bg-white rounded-lg mx-4 sm:flex sm:flex-col sm:shadow-lg sm:shadow-gray-200 sm:rounded-lg sm:bg-white'>
      <div className=' py-4 mx-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:mb-4'>
        <div className=' sm:w-2/5 font-extrabold '> Product summary</div>
        <div className=' sm:w-1/5'> show <span className='w-full'><button className='border rounded-lg text-gray-500 text-xs py-1 px-4'>ALL COLUMN <ExpandMoreIcon/></button></span></div>
        <div className=' sm:w-2/5'><button className='bg-blue-500 px-5 py-2 rounded-lg text-white'>DISPATCH SELECTED</button>
          <span className=' text-gray-500 w-full'><ArrowBackIosNewIcon/> 1 ,2 ,3 ....4 <ArrowForwardIosIcon/>  </span>  
        </div>
      </div>
      <div ><Table data={sampleData} /></div>
    </div>
  );
}

export default Dashboard;


