import { useContext } from "react"
import { EmployeeContext } from "../../contexts/Employee/Employee.context"

const EmployeeCard = () => {
	const { currentEmployees } = useContext(EmployeeContext)
  const imageLocation = '../../images/photos/'
	
  return (
		<div>
			{currentEmployees.map((item) => {
				return (
					<>
						<h2>{item.team.toUpperCase()}</h2>
						{item.members.map((employee) => {
							return (
                <div>
                  <div style={{backgroundImage: `url=(${imageLocation + employee.image})`, height: '300px'}}></div>
                 
                  <p>{employee.title}</p>
                  <p>{employee.name}</p>
                  {employee.bio}
                  

                </div>
              )
						})}
					</>
				)
			})}
		</div>
	)
}

export default EmployeeCard
