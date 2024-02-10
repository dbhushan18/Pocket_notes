import React from 'react'
import AddJob from "../Components/createJob/addJob"
import img from "../assets/Job.png"

function CreateJob() {
    return (
        <div style={{ display: "flex" }}>
            <AddJob />
            <div>
                <h2 style={{
                    color: "#ffffff", position: "absolute", top: "3rem",
                    fontSize: "2em", textAlign: "center", marginLeft: "6rem"
                }}>
                    Recruiter add job details here</h2>
                <img src={img} alt="" style={{ maxHeight: "100vh", width: "40vw" , }} />
            </div>
        </div>
    )
}

export default CreateJob