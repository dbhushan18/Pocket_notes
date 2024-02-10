import React from 'react'
import AddJob from "../Components/createJob/addJob"
import img from "../assets/Job.png"

function JobPost() {
  return (
    <div style={{ display: "flex" }}>
            <AddJob />
            <div>
                <img src={img} alt="" style={{ maxHeight: "100vh", width: "40vw" }} />
            </div>
        </div>
  )
}

export default JobPost