import React from 'react'
import Comments from './Comments';
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'


export default function Blogs() {
  const url = window.location.href;
  const blogId = url.slice(-24);
  const [userData, setUserData] = useState({});
  const getData = async () => {
    try {
      const res = await fetch('/blog/' + blogId, {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const blog = userData;

  return (
    <>
      <div className="card w-50 shadow mx-auto my-5" >
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{blog.topic}</h6>
          <p className="card-text">{blog.content}</p>
          <hr />
          <div className='d-flex bd-highlight mb-3'>
            <button type="button" className="btn btn-outline-danger btn-sm mx-2 p-2 bd-highlight">
              <i className="zmdi zmdi-favorite"></i>
            </button>
            <button type="button" className="btn btn-outline-primary btn-sm mx-2 p-2 bd-highlight">
              <i className="zmdi zmdi-edit"></i>
            </button>
            <button type="button" onClick={async (e) => {
              e.preventDefault();

              const userId = userData._id;
              const blogId = blog._id;
              try {

                const res = await fetch('/blogDelete', {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    userId,
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
                // navigate('/dashboard');
              }
              window.location.reload();
            }} className="btn btn-outline-danger btn-sm mx-2 ms-auto p-2 bd-highlight">
              <i className="zmdi zmdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
      <Comments />
    </>
  )
}