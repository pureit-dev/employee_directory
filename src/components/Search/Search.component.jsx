import {useContext, useState} from 'react';
import { EmployeeContext } from '../../contexts/Employee/Employee.context';

function Search() {
  const {currentEmployees, setCurrentEmployees} = useContext(EmployeeContext)
  const [searchEmployees, setSearchEmployees] = useState('')

  return (
  <div>
    <input type="text" value={searchEmployees} onChange={setSearchEmployees} />
  </div>)
}

export default Search;
