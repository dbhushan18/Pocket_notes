import React from 'react'
import styles from './JobBox.module.css'
import indiaflag from "../../assets/indiaflag.png"
import {useNavigate}  from 'react-router-dom'

function JobBox({ job }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles["main-container"]}>
        {job.map((data) => {
          return (
            <div className={styles.container}>
              <div className={styles["left-container"]}>
                <div className={styles["logo-container"]}>
                  <img src={data?.logoUrl} alt="" />
                </div>

                <div className={styles["details-container"]}>
                  <div className={styles.heading}>
                    <h3>{data?.position}</h3>
                    <div className={styles.details}>
                      <div>
                        <p>₹ {data?.salary}</p>
                      </div>
                      <div className={styles.location}>
                        <img src={indiaflag} alt="" />
                        <p>&nbsp;{data?.location}</p>
                      </div>
                    </div>

                    <div className={styles.jobtype}>
                      <p>{data?.jobtype}</p>
                      <p>{data?.remoteoffice}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["right-container"]}>
                <div className={styles.skills}>
                  {data?.skills.map((skill, index) => {
                    return (
                      <span className={styles.skillsRequired} key={index}>
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <button id={styles.editBtn} onClick={() => { navigate("/job-post", { state: {data:data, id:data._id, edit: true } }) }}>Edit job</button>
                  <button id={styles.viewBtn} onClick={()=>{navigate(`/job-details/${data._id}`)}}>View details</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>

  )
}

export default JobBox