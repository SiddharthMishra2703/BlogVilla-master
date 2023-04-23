import React from 'react'

export default function Comments(props) {
    return (
        <div className="card w-50 shadow mx-auto my-5">
            <div className="card-body">
                <h4 className="card-title">Comments</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add a comment..." />
                    <button className="btn btn-outline-primary" onClick={async (e) => {

                        e.preventDefault();

                        const blogId = props.blogId;
                        const comment = "hello";
                        try {

                            const res = await fetch('/comment', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    comment,
                                    blogId
                                })
                            });

                            const data = await res.json();

                            if (res.status === 422 || !data) {
                                window.alert("Invalid Blog");
                                console.log("Invalid Blog");
                            } else {
                                window.alert("Blog saved successfuly");
                                console.log("Blog saved successfuly");

                                // navigate('/dashboard');
                            }

                        } catch (err) {
                            console.log(err);
                            //   navigate('/login');
                        }

                    }} type="button" id="button-addon2">Post</button>
                </div>
                {/* <input type="text" className="form-control" placeholder="Add a comment..." /> */}
            </div>
        </div>
    )
}
