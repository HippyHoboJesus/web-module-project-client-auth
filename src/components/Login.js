import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {

    const navigate = useNavigate()

    const [cred, setCred] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                navigate('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} name="username" id="username"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={handleChange} id="password"/>
          </div>
          <button>Submt</button>
        </form>
      </div>
    )
}

  export default Login