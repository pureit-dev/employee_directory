import { useContext, Fragment } from "react"
import { EmployeeContext } from "../../contexts/Employee/Employee.context"

const EmployeeCard = () => {
	const { currentEmployees } = useContext(EmployeeContext)
  const imageLocation = '../../images/photos/'
	
  return (
		<div>
			{currentEmployees.map((item, index) => {
				return (
					<Fragment key={index}>
						<h2 >{item.team.toUpperCase()}</h2>
						{item.members.map((employee, index) => {
							return (
                <div key={index}>
                  <img src={imageLocation + employee.image} alt={employee.name}/>
                  <p>{employee.title}</p>
                  <p>{employee.name}</p>
                  {employee.bio}
                </div>
              )
						})}
					</Fragment>
				)
			})}
		</div>
	)
}

export default EmployeeCard
