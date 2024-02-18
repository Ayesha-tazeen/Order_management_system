
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React from 'react';

function NavBar() {
    return (
        <div className='py-4 px-4 mx-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:shadow-lg sm:shadow-gray-200 sm:rounded-lg bg-white'>
            <div className='sm:w-2/5'>
                <div className='font-bold text-sm text-black'>What are you looking for?</div>
                <div className='mt-2 py-1 bg-[#e1eef2] border rounded-lg text-gray-500 text-xs flex items-center'>
                    <SearchIcon className='mr-2' /> Search for category, name, company etc ...
                </div>
            </div>

            <div className='sm:w-2/5 flex flex-col sm:mx-2 mt-4 sm:mt-0'>
                <div className='font-bold text-sm text-black'>Category</div>
                <div className='mt-2 py-1 border rounded-lg text-gray-500 text-xs flex items-center'>
                    <span className='px-2'> All <ExpandMoreIcon /></span>
                </div>
            </div>

            <div className='sm:w-2/5 flex flex-col sm:mx-2 mt-4 sm:mt-0'>
                <div className='font-bold text-sm text-black'>Status</div>
                <div className='mt-2 py-1 border rounded-lg text-gray-500 text-xs flex items-center'>
                    <span className='px-2'> All <ExpandMoreIcon /></span>
                </div>
            </div>
{/* ***************search button goes here ************************** */}
            <div className='sm:w-2/5 flex justify-end items-center mt-4 sm:mt-0'>
                <button className='border text-gray-500 rounded-md p-1 mr-2'><KeyboardDoubleArrowDownIcon /></button>
                <button className='bg-blue-500 px-5 py-1 rounded-lg text-white'>Search</button>
            </div>
        </div>
    );
}

export default NavBar;
