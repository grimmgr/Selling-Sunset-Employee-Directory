import React, { useEffect, useState } from 'react';
import employeeData from './employees.json';

import EmployeeCard from './components/EmployeeCard';

import './App.css';

const App = () => {
  const [employeeState, setEmployeeState] = useState(employeeData);
  const [orderState, setOrderState] = useState('id');
  const [filterState, setFilterState] = useState();

  useEffect(() => {
    let sortedData;

    const sortData = (property) => {
      if (typeof property === 'number') {
        sortedData = [...employeeData].sort((a, b) => {
          return b[property] - a[property];
        });
      } else {
        sortedData = [...employeeData].sort((a, b) => {
          if ( a[property] < b[property] ) {
            return -1;
          }
          if ( a[property] > b[property] ) {
            return 1;
          }
          return 0;
        })
      }
    };
    sortData(orderState);
    setEmployeeState(sortedData);
  }, [orderState]);

  useEffect(() => {
    let filteredData;

    const filterData = (property) => {
      switch(property) {
        case 'favorite':
          filteredData = [...employeeData].filter(
            emp => emp.favorite === true
          )
          break;
        case 'actor':
          filteredData = [...employeeData].filter(
            emp => emp.previous_jobs.includes('actor')
          )
          break;
        case 'model':
          filteredData = [...employeeData].filter(
            emp => emp.previous_jobs.includes('model')
          )
          break;
        case 'real_estate':
          filteredData = [...employeeData].filter(
            emp => emp.previous_jobs.length === 0
          )
          break;
        default:
          filteredData = [...employeeData];
      }
    }

    filterData(filterState);
    setEmployeeState(filteredData);

  }, [filterState])

  return (
    <main>
      <h1>Employee Directory</h1>
      <span>order by:</span>
      <select 
        id='order'
        onChange={event => setOrderState(event.target.value)}
        >
          <option value='id'>---</option>
          <option value='first_name'>first name</option>
          <option value='last_name'>last name</option>
          <option value='big_listing'> biggest listing</option>
      </select>
      <span>filter:</span>
      <select 
        id='filter'
        onChange={event => setFilterState(event.target.value)}
        >
          <option value='none'>---</option>
          <option value='favorite'>Jason's favorite</option>
          <option value='actor'>former actors</option>
          <option value='model'>former models</option>
          <option value='real_estate'>long time agents</option>
      </select>

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
      
    </main>
  );
}

export default App;
