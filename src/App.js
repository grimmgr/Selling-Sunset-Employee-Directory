import React, { useEffect, useState } from 'react';
import employeeData from './employees.json';
import Header from './components/Header';
import EmployeeCard from './components/EmployeeCard';

import './App.css';

const App = () => {

  const [employeeState, setEmployeeState] = useState(employeeData);
  const [orderState, setOrderState] = useState('id');
  const [filterState, setFilterState] = useState('everyone');

  // helper function to sort data
  const sortData = (property, dataArray) => {
    let newArray;
    if (property === 'id') {
      newArray = [...dataArray].sort((a, b) => {
        return a[property] - b[property];
      });
    }
    if (property === 'big_listing') {
      newArray = [...dataArray].sort((a, b) => {
        return b[property] - a[property];
      });
    } else {
      newArray = [...dataArray].sort((a, b) => {
        if ( a[property] < b[property] ) {
          return -1;
        }
        if ( a[property] > b[property] ) {
          return 1;
        }
        return 0;
      })
    }
    return newArray;
  };

  // helper function to filter data
  const filterData = (property, dataArray) => {
    let newArray;
    switch(property) {
      case 'favorite':
        newArray = dataArray.filter(
          emp => emp.favorite === true
        )
        break;
      case 'actor':
        newArray = dataArray.filter(
          emp => emp.previous_jobs.includes('actor')
        )
        break;
      case 'model':
        newArray = dataArray.filter(
          emp => emp.previous_jobs.includes('model')
        )
        break;
      case 'real_estate':
        newArray = dataArray.filter(
          emp => emp.previous_jobs.length === 0
        )
        break;
      default:
        newArray = dataArray;
    }
    return newArray;
  }

  useEffect(() => {
    // filter employee data
    const filtered = filterData(filterState, employeeData);
    // sort employee data
    const filteredAndSorted = sortData(orderState, filtered);
    // set state
    setEmployeeState(filteredAndSorted);

  }, [orderState, filterState])

  return (
    <>
      <Header />
      <main>
        <div className='options'>
          <div className='sort'>
            <span>sort by:</span>
            <select 
              id='order'
              onChange={event => setOrderState(event.target.value)}
              >
                <option value='id'>---</option>
                <option value='first_name'>first name</option>
                <option value='last_name'>last name</option>
                <option value='big_listing'> biggest listing</option>
            </select>
          </div>
          <div className='filter'>
            <span>show:</span>
            <select 
              id='filter'
              onChange={event => setFilterState(event.target.value)}
              >
                <option value='none'>everyone</option>
                <option value='favorite'>Jason's favorite</option>
                <option value='actor'>former actors</option>
                <option value='model'>former models</option>
                <option value='real_estate'>long time agents</option>
            </select>
          </div>
        </div>
        <div className='flex-container'>
          { employeeState.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              firstName={employee.first_name}
              lastName={employee.last_name}
              image={employee.image}
              email={employee.email}
              instagram={employee.instagram}
              bigListing={employee.big_listing}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
