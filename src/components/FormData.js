import React, { useEffect, useState } from "react"





const FormData = () => {

    const [data,setData] = useState([])

  


    useEffect(() =>{
        fetchData();
      },[]);

    const fetchData = ()=>{fetch('http://localhost:8082/section/all',{
      method:'GET',
      headers:{
        'content-Type':'application/json'
      }
    }).then((response) => response.json())
    .then((data) => {
      setData(data);
    }); 
  }

    return(

        <div className="container">
        <div>


        <table className="table table-responsive m-4">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Orders</th>
      <th scope="col">CourseName</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.orders}</td>
            <td>{item.course ? item.course.name : 'N/A'}</td>
          </tr>
        ))}

    </tbody>
        </table>

        </div>

        </div>
     )
}
export default FormData