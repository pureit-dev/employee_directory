import './EmployeeCard.styles.css'

const EmployeeCard = ({ employee, index }) => {
	const imageLocation = "../../images/photos/"

	return (
		<div className="employee-card-container" key={index}>
			<img className="employee-card-img" src={imageLocation + employee.image} alt={employee.name} />
			<p className="employee-card-name">{employee.name}</p>
			<p className="employee-card-title">{employee.title}</p>
			{employee.bio}
		</div>
	)
}

export default EmployeeCard
