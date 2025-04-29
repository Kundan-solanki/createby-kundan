import React from 'react'
import { data } from 'react-router-dom'

export default function User() {

    function registerLogin(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/user',{ 
          name,discription
        }).then((req , response)=>{
          console.log(response.data)
          
          
        }).catch(err=>{
          console.log('this is err handaling',err?.errorResponse?.errmsg)
          
        })
      }
  return (
    <>
    <div className='container'>
        <table>
            <thead>
       <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>


            </thead>
            <body>
                {
                    data.map((item)=>{
                        console.log(data)
                        return(

                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                </tr>
                        )
                    })


                }
            </body>
            
        </table>

    </div>
    </>
  )
}
