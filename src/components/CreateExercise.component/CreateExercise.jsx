import React, { useState, useEffect } from "react";
import ExerciseList from "../ExerciseList.component/ExerciseList";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import { Link } from "react-router-dom";
const CreateExercise = () => {
  const [exerciseData, setExerciseData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {

   
    axios.get("http://localhost:5000/users").then((result) => {

    setExerciseData(()=>{
            const abc=result.data
        return{
            users: abc.map((user)=>{return(user.username)}
            )
        }

    }

    )
  } 
    ).catch((err)=>{return(console.log(err))})}
  , []);

  const handelUserName = (e) => {
    setExerciseData((prevValue) => {
      console.log(e.target.value);
      return {
        username: e.target.value,

        description: prevValue.description,
        duration: prevValue.duration,
        date: prevValue.date,
        users: prevValue.users,
      };
    });
  };

  const handeldescription = (event) => {
    setExerciseData((prevValue) => {
      return {
        username: prevValue.username,

        description: event.target.value,
        duration: prevValue.duration,
        date: prevValue.date,
        users: prevValue.users,
      };
    });
  };
  const handelduration = (event) => {
    setExerciseData((prevValue) => {
      return {
        username: prevValue.username,

        description: prevValue.description,
        duration: event.target.value,
        date: prevValue.date,
        users: prevValue.users,
      };
    });
  };
  const handeldate = (event) => {
    setExerciseData((prevValue) => {
      return {
        username: prevValue.username,

        description: prevValue.description,
        duration: prevValue.duration,
        date: event.target.value,
        users: prevValue.users,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const exerciseSubmited = {
      username: exerciseData.username,

      description: exerciseData.description,
      duration: exerciseData.duration,
      date: exerciseData.date,
      
    };

    axios
      .post(
            'http://localhost:5000/exercises/add'
      
      , exerciseSubmited)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container  mx-4">
      <h3 className="fs-2 fw-bold text-center">Create New Exercise</h3>
      <form className="text-center mx-5" onSubmit={handelSubmit}>
        <select
          className="form-select col-5 text-danger"
          aria-label="Default select example"
          onChange={handelUserName}
          value={exerciseData.username}
        >
          {exerciseData.users.map((user) => {
            // console.log(user)
            // console.log("from .map of options")k

            // console.log(user)
            return (
              <option value={user} name="username" key={user}>
                {user}
              </option>
            );
          })}
        </select>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="decription"
            className="form-control"
            value={exerciseData.description}
            onChange={handeldescription}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration (In min) </label>
          <input
            type="number"
            name="duration"
            className="form-control"
            value={exerciseData.duration}
            onChange={handelduration}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date </label>
          <DatePicker
            className="form-control"
            selected={exerciseData.date}
            name="date"
            onChange={(date) => {
              setExerciseData((prevValue) => {
                console.log(date);
                return {
                  username: prevValue.username,

                  description: prevValue.description,
                  duration: prevValue.duration,
                  date: date,
                  users: prevValue.users,
                };
              });
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
