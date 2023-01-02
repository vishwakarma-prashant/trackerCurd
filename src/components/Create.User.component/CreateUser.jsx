import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// axios.get("https://localhost:5000/user").then((result)=>{
//     console.log(result)
// })
// .catch((err)=>console.log(err)   )

const CreateUser = () => {
  const [usersArry, setUserArry] = useState({
    users: [],
  });


  const [userName, setUserName] = useState("");
  const handelUserName = (e) => {
    return setUserName(e.target.value);
  };
  const handelSubmit = (e) => {
     e.preventDefault();
    const user = {
      username: userName,
    };


    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        //console.log(res);
      })
      .catch((err) => {
        console.log(`err is`);
        console.log(err);
      });

     

   
  };


  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((result) => {
        //console.log(result);
        setUserArry({
          users: result.data,
        });
      })
      .catch((err) => {});
  }, [handelSubmit]);


  const handelDeleteUser = (id) => {
    console.log(id);

    axios
      .delete("http://localhost:5000/users/"+id)
      .then((result) => {
        console.log("item deleted");
        setUserArry({
          users: usersArry.users.filter((el) => {
            return (el._id !== id)
          }),
        });
        //console.log(result)
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  return (
    <div className="container  mx-4">
      <h3 className="fs-2 fw-bold text-center">Create New User</h3>
      <form className="text-center mx-5" onSubmit={handelSubmit}>
        <div className="mb-3">
          <label className="form-label">User</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={userName}
            onChange={handelUserName}
          />
        </div>

       
        <button type="submit" className="btn btn-primary">
          Submit
        </button> 
        
      </form>
      <div className="container text-center mt-4">
        <button type="button" className="btn text-center btn-secondary">
          <Link className="btn " to={"/create"}>
            Create Exercise
          </Link>
        </button>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UserName</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {usersArry.users.map((user) => {
              const id = user._id;
              return (
                <tr>
                  <td>{user.username}</td>
                  <td>
                    <button
                      type="button "
                      key={user._id}
                      className="btn btn-primary"
                      onClick={(e) => {
                       
                        return handelDeleteUser(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateUser;
