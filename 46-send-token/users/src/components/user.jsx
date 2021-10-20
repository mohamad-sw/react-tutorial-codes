import { useState, useEffect } from "react";
import axios from "axios";
import queryString from 'query-string';

const User = (props) => {
  const [user, setUser] = useState({});
  console.log(queryString.parse(props.location.search));

  useEffect(async () => {
    const response = await axios.get(
      `https://reqres.in/api/users/${props.match.params.id}`
    );
    setUser(response.data.data);
  },[]);

  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />
      <h4 >
        {user.first_name} {user.last_name}
      </h4>
      <h5>{user.email}</h5>
      <button onClick={()=>{props.history.replace('/users')}} className="btn btn-info mt-3">Users</button>
    </>
  );
};

export default User;
