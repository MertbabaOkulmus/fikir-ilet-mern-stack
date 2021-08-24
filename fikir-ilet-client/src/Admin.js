import React, { Component } from 'react'

class Admin extends Component {
    render() {
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
                            
                             />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput2">Password</label>
                        <input
                            type="name"
                            class="form-control"
                            id="exampleFormControlInput2"
                            
                            />
                    </div>
                    <br/>
                    <br/>
                    <button className="btn btn-success">Gönder</button>

                </div>
            </div>
        )
    }
}

export default Admin;