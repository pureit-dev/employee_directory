import {createContext, useState} from 'react';
import employees from '../../employees_data';

export const EmployeeContext = createContext({
  currentEmployees: null,
  setCurrentEmployees: () => null,
})

export const EmployeeProvider = ({children}) => {

  const {currentEmployees, setCurrentEmployees} = useState(employees)

  const value = {currentEmployees, setCurrentEmployees}
  
  return (
  <EmployeeContext.Provider value={value}>
    {children}
  </EmployeeContext.Provider>)
}


