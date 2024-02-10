import React, { useState, useEffect } from 'react'
import styles from "./Home.module.css"
import searchIcon from "../../assets/Search.png"
import JobBox from './JobBox'
import { getAllJobDetails } from '../../apis/job'
import { getAllJobs } from '../../apis/job'
import { DEFAULT_SKILLS } from '../../utils/constants'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom'
import NoResultsFound from './NoResultsFound'

function Home() {
    const [jobData, setJobData] = useState(true);
    const [skills, setSkills] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLoggedIn, setIsloggedIn] = useState(token? true: false);

    useEffect(() => {
        fetchJobDetails();
    }, [skills, search]);

    useEffect(() => {
        getAlljob();
    }, [])

    const handleSkills = (event) => {
        if (!event.target.value) return;

        const newSkills = skills.filter((skill) => skill === event.target.value);
        if (!newSkills.length)
            setSkills([...skills, event.target.value])
    }

    const removeSkill = (selectedSkill) => {
        const newArr = skills.filter((skill) => skill !== selectedSkill);
        if(!skills) navigate("/");
        setSkills([...newArr]);
    };

    const fetchJobDetails = async () => {
        if (!skills.length && !search) return;
        const payload = {
            skills: skills.map((skill) => skill),
            // skills:skills.join(","),
            position: search?.trim()
        }
        const joblist = await getAllJobDetails(payload);
        setJobData(joblist);
    }

    const getAlljob = async () => {
        const joblist = await getAllJobs();
        setJobData(joblist);
    }

    const handleKeyDown = (event) => {
        if (!search?.trim()) {
            return;
        }
        if (event.keyCode === 13) {
            fetchJobDetails();
        }
    };

    const logout = () => {
        localStorage.clear();
        setIsloggedIn(false);
        navigate("/login")
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logoText} onClick={() => navigate("/")}>Jobfinder</div>
                    <div className={styles.right}>
                        {isLoggedIn ? <button onClick={logout}>Logout</button> :
                                        <button onClick={()=>navigate("/login")}>Login</button>
                        }

                        <span>Hello! Recruiter</span>
                    </div>
                </div>

                <div className={styles["body-container"]}>
                    <div className={styles.search}>
                        <div className={styles.searchDiv}>
                            <input type="text" className={styles.searchBox}
                                placeholder='Type any job title'
                                onChange={(event) => setSearch(event.target.value)}
                                onKeyDown={handleKeyDown} />
                            <img src={searchIcon} alt="Search" onClick={fetchJobDetails} />
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.skills}>
                                <div>
                                    <select name="" onChange={handleSkills}>
                                        <option value="" >Skills</option>
                                        {DEFAULT_SKILLS.map((skill) => (
                                            <option key={skill} value={skill}>{skill}</option>
                                        ))}
                                    </select>
                                </div>

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

                            <div id={styles.addBtn} onClick={() => navigate("/addJob")}><button>+ Add Job</button></div>
                        </div>
                    </div>

                    <div className={styles["job-container"]}>
                        {jobData ? (
                            <div className={styles.body}>
                                {Object.values(jobData).map((job) => {
                                    return (
                                        <JobBox key={job._id} job={job} />
                                    )
                                })}
                            </div>
                        ) :
                            <NoResultsFound />
                        }
                    </div>

                </div>
            </div>
        </>
    )

}

export default Home