//Author: Lakshmi
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
    const { auth } = useSelector((store) => store);
    console.log('auth', auth);

    return (
    <div className="main profile-container">
    <h3 className=" profile-title">My Profile</h3>
            <div className="card">
                <div className="card-body">
                    <i className="fa fa-pen fa-xs edit"></i>
                    <table>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>:</td>
                                <td>{auth?.user?.firstName}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>:</td>
                                <td>{auth?.user?.lastName}</td>
                            </tr>

                            <tr>
                                <td>Mobile</td>
                                <td>:</td>
                                <td>{auth?.user?.mobile}</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td>{auth?.user?.email}</td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td>:</td>
                                <td>{auth?.user?.role}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>         

    </div>
    );
}

export default Profile;
