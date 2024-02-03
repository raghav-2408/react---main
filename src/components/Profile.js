import React from "react";
// import Navbar from './Navbar'
// import { Link } from 'react-router-dom'

export default function Profile(props) {
  return (
    <>
      <div>
        <div className="h1 text-center">
          <h1>Profile</h1>
        </div>
        <div className="container my-4">
          <form class="row g-3">
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">
                Username
              </label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationDefault03" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault03"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="validationDefault04" class="form-label">
                State
              </label>
              <select class="form-select" id="validationDefault04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="validationDefault05" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault05"
                required
              />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label class="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-success" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
