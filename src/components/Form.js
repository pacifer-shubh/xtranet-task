import React, { useState,useEffect } from 'react'
const Form = () => {

  const [teacher,setTeacher]  = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = ()=>{fetch("http://localhost:8081/course/all",{
      method:'GET',
      headers:{
        'content-Type':'application/json'
      }
    }).then((response) => response.json())
    .then((data) => {
      setTeacher(data);
    }); 
  }

  const [credentials, SetCredentials] = useState({
    name: "",
    orders: "",
    uid: "",
    
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
          teacher.map((teacher) =>
              teacher.id === credentials.uid
                  ? localStorage.setItem('courseName',teacher.name)
                  :console.log("finding")
          );
    const {name, orders} = credentials;
    const response = await fetch("http://localhost:8082/section", {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({"name": name, "orders":  orders,"course": {
        "id": `${credentials.uid}`,
        "name": `${localStorage.getItem('courseName')}`
    }})

    })
    const json = await response.text();
    console.log(json);

    if (json) {

      alert("success")
    }

  }

  const onChange = (e) => {
    SetCredentials({ ...credentials, [e.target.name]: e.target.value })

  }
  return (
    <div className="signup col-lg-4 offset-sm-4 rounded border p-4 mt-5 shadow">
      <legend>Fill the form</legend>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={credentials.name} onChange={onChange} name="name" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Order</label>
          <input className="form-control" value={credentials.orders} onChange={onChange} name="orders" id="orders" type="number" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Course</label>
          <select
            onChange={onChange}
            id="id"
            className="form-select" aria-label="Default select example"
            name="uid"
            required
            
          >
            <option>select Course</option>
            {teacher.map((element) => {
            return(
              <option key={element.id} name="uid" value={element.id}>{element.name}</option>

              
            )
          })}

          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default Form