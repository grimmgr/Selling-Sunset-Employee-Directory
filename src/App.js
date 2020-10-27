import React, { useEffect, useState } from 'react';
import employeeData from './employees.json';

import EmployeeCard from './components/EmployeeCard';

import './App.css';

const App = () => {
  const [employeeState, setEmployeeState] = useState(employeeData);
  const [orderState, setOrderState] = useState('id');

  useEffect(() => {
    let sortedData;

    const sortData = (property) => {
      if (property === 'big_listing') {
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

    //console.log(orderState);
    sortData(orderState);
    setEmployeeState(sortedData);
  }, [orderState]);
  

  return (
    <main>
      <h1>Employee Directory</h1>
      <span>order by:</span>
      <select 
        id='order'
        onChange={event => setOrderState(event.target.value)}
        >
          <option value='first_name'>first name</option>
          <option value='last_name'>last name</option>
          <option value='big_listing'> biggest listing</option>
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
