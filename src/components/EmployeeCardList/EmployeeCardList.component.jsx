import EmployeeCard from "../EmployeeCard/EmployeeCard.component"
import './EmployeeCardList.styles.css'
const EmployeeCardList = ({ filteredEmployees }) => {
	

	return (
		<div className="employee-card-list">
			{filteredEmployees.map((employee, index) => {
				return <EmployeeCard employee={employee} index={index} />
			})}
		</div>
	)
}

export default EmployeeCardList
