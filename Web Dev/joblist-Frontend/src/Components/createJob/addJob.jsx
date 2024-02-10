import React, { useEffect } from 'react'
import styles from "./addJob.module.css"
import Select from "react-select"
import { useState } from 'react'
import { addNewJob } from '../../apis/job'
import { useLocation, useNavigate } from "react-router-dom"
import { UpdateJob } from '../../apis/job'
import { DEFAULT_SKILLS } from '../../utils/constants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function addJob() {
  const { state } = useLocation();
  const [isExistingJob] = useState(false || state?.edit);
  const [skills, setSkills] = useState(state?.data?.skills || []);
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    companyName: "" || state?.data?.companyName,
    logoUrl: "" || state?.data?.logoUrl,
    position: "" || state?.data?.position,
    salary: "" || state?.data?.salary,
    jobtype: "" || state?.data?.jobtype,
    duration: "" || state?.data?.duration,
    remoteoffice: "" || state?.data?.remoteoffice,
    location: "" || state?.data?.location,
    description: "" || state?.data?.description,
    about: "" || state?.data?.about,
    information: "" || state?.data?.information,
    createdAt: "",
    id: "" || state?.data?._id,
    // skills: state?.data?.skills,
    // skills: skills.map((skill) => skill.trim()),
  })

  // const [tempskills, setTempSkills] = useState({
  //   fetchedSkills: "" || state?.data?.skills,
  // });
  const handleClick = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  }

  const handleSkill = (e) => {
    if (!isExistingJob) {
      // const skills = e.target.value.map((skill) => skill);
      // console.log(skills)
      setSkillsRequired(data);
      // setTempSkills(...skills, e.target.value);
    }
  }

  const handleSkillsChange = (e) => {
    const newSkills = e.target.value.split(",").map((skill) => skill);
    setSkills(newSkills);
  };

  const removeSkill = (selectedSkill) => {
    const newArr = skills.filter((skill) => skill !== selectedSkill);
    setSkills([...newArr]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    jobData.createdAt = new Date().toLocaleDateString();
    if (isExistingJob) {
      if (!state?.id) return;
      await UpdateJob(state?.id, { ...jobData, skills: skills }).then(()=>{
        toast.success("Job Updated Successfully!!", {
          position: "top-right",
          autoClose: 2000,
        });
      }). catch((err)=>{
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
    }

    else {
      await addNewJob({ ...jobData, skills: skills }).then(()=>{
        toast.success("Job Added Successfully!!", {
          position: "top-center",
          autoClose: 2000,
        });
      }). catch((err)=>{
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
        
      
      
    }

  }

  return (
    <>
      <div className={styles.container}>
        {isExistingJob ? (<h2>Edit job description</h2>) : (<h2>Add job description</h2>)}

        <form>
          <div className={styles.field}>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id='companyName'
              name='companyName'
              value={jobData?.companyName}
              placeholder='Enter your company name here'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="logoUrl">Add Logo URL</label>
            <input
              type="text"
              id='logoUrl'
              name='logoUrl'
              value={jobData?.logoUrl}
              placeholder='Enter the link'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="JobPosition">Job position</label>
            <input
              type="text"
              id='JobPosition'
              name='position'
              value={jobData?.position}
              placeholder='Enter job position'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              id='duration'
              name='duration'
              value={jobData?.duration}
              placeholder='Enter job duration'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="salary">Monthly Salary</label>
            <input
              type="text"
              id='salary'
              name='salary'
              value={jobData?.salary}
              placeholder='Enter Amount in rupees'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="jobtype">Job type</label>
            <select name="jobtype" id="jobtype" onChange={handleClick} value={jobData?.jobtype}>
              <option value="" selected disabled>Select Job Type</option>
              <option value="FullTime">Full Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="remote_office">Remote/office</label>
            <select name="remoteoffice" id="remote_office" onChange={handleClick} value={jobData?.remoteoffice}>
              <option value="" selected disabled>Select Remote/office</option>
              <option value="remote">Remote</option>
              <option value="office">Office</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id='location'
              name='location'
              value={jobData?.location}
              placeholder='Enter Location'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description">Job Description</label>
            <textarea
              id='description'
              name='description'
              value={jobData?.description}
              placeholder='Type the job description'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="about">About Company</label>
            <textarea
              id='about'
              name='about'
              value={jobData?.about}
              placeholder='Type about your company'
              onChange={handleClick}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="skills">Skills Required</label>

            {/* <select
              className={styles.select}
              id='skills'
              placeholder="Select skills Required"
              onChange={handleSkill}
              value={tempskills?.fetchedSkills}
              options={skillsList}
              isSearchable={true}
              isMulti
              menuPlacement='top'
            > */}

            <div className={styles.skills}>
              {/* <select name="" onChange={handleSkill} className={styles.selectSkill}>
                <option value=" " disabled>Skills</option>
                {DEFAULT_SKILLS.map((skill) => (
                  <option key={skill} value={tempskills}>{skill}</option>
                ))}
              </select> */}

              <input
                type="text"
                placeholder="Skills Required"
                value={skills}
                name="skills"
                onChange={handleSkillsChange}
              />

              <div className={styles.selectedSkills}>
                {skills?.map((skill) => (
                  <span className={styles.selectedSkill}>
                    <div className={styles.showSkill} key={skill}>{skill}
                      <span className={styles.cross}
                        onClick={() => removeSkill(skill)}>
                        X
                      </span>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="information">Information</label>
            <input
              type="text"
              id='information'
              name='information'
              value={jobData?.information}
              placeholder='Enter the additional information'
              onChange={handleClick}
            />
          </div>
          <button id={styles.cancel} onClick={() =>
            jobData?.id ? navigate(`/job-details/${jobData.id}`) : navigate("/")}>cancel</button>
          {isExistingJob
            ? (<button id={styles.add} onClick={(e) => handleSubmit(e)}>Edit Job</button>)
            : (<button id={styles.add} onClick={(e) => handleSubmit(e)}>+ Add Job</button>)
          }
          <ToastContainer />
        </form>
      </div>
    </>
  )
}
export default addJob