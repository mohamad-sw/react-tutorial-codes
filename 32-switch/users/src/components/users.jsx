import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true,
  };

  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    this.setState({ users: response.data.data, isLoading: false });
  }

  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">
          create
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <LoadingUsers />
          ) : (
            this.state.users.map((user) => {
              return (
                <div className="col-4 text-center p-5">
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                  />
                  <h4>
                    {user.first_name} {user.last_name}
                  </h4>
                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={()=>{this.handleUpdate(user)}}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={()=>{this.handleDelete(user)}}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }

  handleCreate = async () => {
    const newUser = {
      first_name: 'mohammad',
      last_name: 'seyedAghaie',
      email: 'mohamadhosein20000@gmail.com',
      avatar: 'http://neonlearn.ir/uploads/images/users/1587741072106-photo_2018-09-25_21-36-49.jpg'
    };
    const response = await axios.post('https://reqres.in/api/users', newUser);
    this.setState({users: [...this.state.users, newUser]});
  };

  handleUpdate = async (user) => {
    user.first_name = 'updated';
    const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
    const updatedUsers = [...this.state.users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = {...user};
    this.setState({users: updatedUsers});
  };  

  handleDelete = async(user) => {
    const response = await axios.delete(`https://reqres.in/api/users/${user.id}`);
    const newUsers = this.state.users.filter(u => u.id !== user.id);
    this.setState({users: newUsers});
  };
}

export default Users;
