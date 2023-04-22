import React from 'react'

export default function Comments() {
    return (
        <div className="card w-50 shadow mx-auto my-5">
            <div className="card-body">
                <h4 className="card-title">Comments</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add a comment..."/>
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">Post</button>
                </div>
                {/* <input type="text" className="form-control" placeholder="Add a comment..." /> */}
            </div>
        </div>
    )
}
