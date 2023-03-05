
import './App.css';
import EmployeeCard from './components/EmployeeCard/EmployeeCard.component';
import Search from './components/Search/Search.component';
import Header from './components/Header/Header.component';

function App() {
  return (
    <div className="App">
      <Header />
       
      <EmployeeCard />
    </div>
  );
}

export default App;
