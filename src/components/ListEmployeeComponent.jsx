

const ListEmployeeComponent = () => {

  const dummyData = [
    {
      "id": 1,
      "firstName": "Gildong",
      "lastName": "Hong",
      "email": "xxx@xxx.xxx"
    }, 
    {
      "id": 2,
      "firstName": "Sohee",
      "lastName": "Han",
      "email": "dsfsdf@xxx.xxx"
    },
    {
      "id": 3,
      "firstName": "Wonyoung",
      "lastName": "Jang",
      "email": "xxx@xxx.xxx"
    }
  ]

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            dummyData.map(employee => 
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent