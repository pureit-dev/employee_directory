import "./EmployeeCard.styles.css"

const EmployeeCard = ({ employee, index }) => {
	const imageLocation = "../../images/photos/"

	return (
		<div className="employee-card-container" key={index}>
			<img
				className="employee-card-img"
				src={imageLocation + employee.image}
				alt={employee.name}
			/>
			<p className="employee-card-name">{employee.name}</p>
			<p className="employee-card-title">{employee.title}</p>
			<div
				className="employee-card-bio"
				dangerouslySetInnerHTML={{ __html: employee.bio }}
			></div>
			<div className="employee-card-icons">
				{employee.social.linkedin && (
					<a href={employee.social.linkedin} target="_blank" className="fa-brands fa-linkedin "></a>
				)}
				{employee.social.twitter && (
					<a href={employee.social.twitter} target="_blank" className="fa-brands fa-twitter"></a>
				)}
			</div>
		</div>
	)
}

export default EmployeeCard
