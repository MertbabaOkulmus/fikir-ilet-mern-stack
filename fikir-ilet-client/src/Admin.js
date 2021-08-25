import axios from 'axios'
import React, { useState } from 'react'
import AdminPaneli from './AdminPaneli';

const Admin = () => {

    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [successfulEntry, setSuccessfulEntry] = useState(false);
    const formuGonder = () => {
        console.log("ffdf");
        axios.post('http://localhost:5555/admin', {
            fullName,
            password
        })
            .then(res => {
                console.log("ddd");
                console.log(res.status);
                console.log(res.data);
                if (res.status === 200) {
                    setSuccessfulEntry(true);
                    alert('Giriş başarılı!')
                }

            })
    }
    if (successfulEntry) return <AdminPaneli />
    return (
        <div className="text-center mt-3">
            <h1>Admin Paneli</h1>
            <div className="mx-auto w-25 mt-5">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Full Name</label>
                    <input
                        type="name"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput2">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleFormControlInput2"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <br />
                <br />
                <button className="btn btn-success" onClick={formuGonder}>Gönder</button>

            </div>
        </div>
    )
}


export default Admin;