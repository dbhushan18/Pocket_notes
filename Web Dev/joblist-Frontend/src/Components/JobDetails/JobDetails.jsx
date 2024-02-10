import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import styles from "./JobDetails.module.css"
import moment from "moment"
import stipendLogo from "../../assets/stipend.png"
import calenderLogo from "../../assets/calender.png"
import { getJobDetails } from '../../apis/job'

function JobDetails() {

  const navigate = useNavigate();

  const [data, setData] = useState(true);
  const timeAgo = moment(new Date(data?.createdAt)).fromNow();

  useEffect(() => {
    fetchJobDetails()
  }, [])

  const fetchJobDetails = async () => {
    const jobId = window.location.pathname?.split("/").slice(-1)[0];
    console.log(typeof (jobId))
    if (!jobId) return;
    const response = await getJobDetails(jobId);
    setData(response);
  }

  const logout = () => {
    localStorage.clear();
    navigate("/login")
}

  return (

    <>
      {data ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.logoText} onClick={()=>navigate("/")}>Jobfinder</div>
            <div className={styles.right}>
              <button onClick={logout}>Logout</button>
              <span>Hello! Recruiter</span>
            </div>
          </div>

          <div className={styles["body-container"]}>
            <div className={styles.heading}>
              <p>{data?.position}  work from {data?.remoteoffice} {data?.jobtype} at {data?.companyName}
              </p>
            </div>

            <div className={styles.body}>
              <div className={styles.upper}>
                <p>{timeAgo}</p>
                <p>.</p>
                <p>{data?.jobtype}</p>
                <img src={data?.logoUrl} alt="CompanyLogo" />
                <p>{data?.companyName}</p>
              </div>

              <h2 id={styles.Jobposition}>{data?.position}</h2>
              <p id={styles.location}>{data?.location}</p>

              <div className={styles.duration}>
                <div className={styles.stipendbox}>
                  <div className={styles.stipend}>
                    <img src={stipendLogo} alt="" />
                    <p>Stipend</p>
                  </div>
                  <div><p>{data?.salary}</p></div>
                </div>

                <div className={styles.calenderbox}>
                  <div className={styles.calender}>
                    <img src={calenderLogo} alt="" />
                    <p>Duration</p>
                  </div>
                  <div><p id={styles.period}>{data?.duration}</p></div>
                </div>
              </div>

              <div className={styles.about}>
                <h3>About company</h3>
                <p>{data?.about}</p>
              </div>

              <div className={styles.aboutjobtype}>
                <h3>About the  job/internship</h3>
                <p>{data?.description}</p>
              </div>

              <div className={styles.skills}>
                <h3>Skill(s) required</h3>
                {data.skills?.map((skill) => {
                  return (
                    <span className={styles.skillsRequired}>{skill}</span>
                  );
                })}
              </div>

              <div className={styles.information}>
                <h3>Additional Information</h3>
                <p>{data?.information}</p>
              </div>

            </div>
            <button id={styles.edit}
              onClick={() => { navigate("/job-post", { state: {data:data, id:data._id, edit: true } }) }}>
              Edit Page</button>
          </div>
        </div>
      ) : (<></>)}
    </>
  )
}

export default JobDetails