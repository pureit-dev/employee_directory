import "./App.css"
import { useState, useEffect } from "react"
import employees from "./employees_data"
import EmployeeCardList from "./components/EmployeeCardList/EmployeeCardList.component"
import Search from "./components/Search/Search.component"
import Header from "./components/Header/Header.component"

function App() {
	// const [allEmployees, setAllEmployees] = useState(employees)
	const [filteredEmployees, setFilteredEmployees] = useState(employees)
	const [searchField, setSearchField] = useState("")
	const [dropDownSearch, setDropDownSearch] = useState("everyone")
	const teams = ["leadership", "sales", "customer service", "product"]


	useEffect(() => {
		const newFilteredEmployees = employees.filter((employee) => {
			if (dropDownSearch.toLowerCase() !== "everyone") {
				return (
					employee.name.toLowerCase().includes(searchField) &&
					employee.team.toLowerCase().includes(dropDownSearch)
				)
			} else {
				setFilteredEmployees(employees)
				return employee.name.toLowerCase().includes(searchField)
			}
		})
		setFilteredEmployees(newFilteredEmployees)
	}, [searchField, dropDownSearch])

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase()
		setSearchField(searchFieldString)
	}

	const onDropDownChange = (event) => {
		const dropDownString = event.target.value.toLowerCase()

		setDropDownSearch(dropDownString)
	}

	return (
		<div className="App">
			<Header>
				<Search
					onDropDownChange={onDropDownChange}
					onChangeHandler={onSearchChange}
					placeholder="search employees"
					teams={teams}
				/>
			</Header>

			<EmployeeCardList filteredEmployees={filteredEmployees} />
		</div>
	)
}

export default App
