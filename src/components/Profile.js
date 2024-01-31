import React from 'react'
// import Navbar from './Navbar'
// import { Link } from 'react-router-dom'

export default function Profile(props) {
    return (
        <div>
            {/* Navbar */}

            {/* Details  */}

            <div className="container my-4">
                <h2 className='container text-center'>Profile</h2>
                <form className="row g-4 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" value="" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" value="" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div> */}
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">Gender</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer Not to say</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom05" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className={`btn btn-${props.primary}`} type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
