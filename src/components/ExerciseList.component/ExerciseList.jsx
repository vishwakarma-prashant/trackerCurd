import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const ExerciseList = () => {

    const [exerciseList, setexerciseList] = useState({
        exercises: []
    })

    useEffect(()=>{
        axios.get('http://localhost:5000/exercises/').then((result)=>{

         //console.log(result.data)

        

        return(
            setexerciseList({
                exercises: result.data
            })
            //console.log(exerciseList)
        )

        }).catch((err)=>{console.log(err)})

        
    },[])

    //console.log(exerciseList)
    

    const handelDelete=(id)=>{
        axios.delete(`http://localhost:5000/exercises/${id}` ).then((result)=>{
            console.log(id)
         
        console.log(result)


         setexerciseList({
            exercises : exerciseList.exercises.filter(element =>{
                return(
                    element._id !== id

                );
            })
         })
        }).catch((err)=>{
            console.log(err) 
        })
    }

    

  return (
    <div className='container'><h1>ExerciseList</h1>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Description</th>
      <th scope="col">Duration</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
   {
      exerciseList.exercises.map((cureentExercise)=>{
    // console.log(cureentExercise)

    return(
        <tr>
            <td>{cureentExercise.username}</td>
            <td>{cureentExercise.description}</td>
            <td>{cureentExercise.duration}</td>
            <td >{cureentExercise.date}</td>
            <td><button onClick={()=>{
                handelDelete(cureentExercise._id)
            }}>Delete</button></td>
          </tr>

        

    )

})
   }
  </tbody>
</table>
    </div>
  )
}

export default ExerciseList