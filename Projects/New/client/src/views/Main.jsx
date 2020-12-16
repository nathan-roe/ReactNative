import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
const Main = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/findAllUsers")
            .then(res => setUsers(res.data));
    }, [users])
    const createUser = user => {
        axios.post("http://localhost:8000/api/createUser", user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h2>Add a User</h2>
            < UserForm onSubmitProp={createUser}/>
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return <content key = {i}>
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            </content>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Main;