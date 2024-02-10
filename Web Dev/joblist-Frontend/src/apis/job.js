import axios from "axios";
const Backend_url = import.meta.env.VITE_BACKEND_URL

export async function getJobDetails(jobId) {
    try {
        const url = `${Backend_url}/job/job-details/${jobId}`
        const response = await axios.get(url);
        return response.data?.data;
    }
    catch (err) {
        console.log(err)
    }
}

export async function getAllJobDetails({ skills, position }) {
    try {

        const url = `${Backend_url}/job/all?skills=${skills}&position=${position}`
        const response = await axios.get(url);
        return response.data;

    }
    catch (err) {
        console.log(err);
    }
}

export async function getAllJobs() {
    try {

        const url = `${Backend_url}/job/all`
        const response = await axios.get(url);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}


export async function addNewJob({ companyName, logoUrl, position, salary, jobtype, remoteoffice, location, description, about, skills, information, createdAt, duration }) {
    try {

        const url = `${Backend_url}/job/jobs`
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const params = { companyName, logoUrl, position, salary, jobtype, remoteoffice, location, description, about, skills, information, createdAt, duration }
        const response = await axios.post(url, params)
        return response.data;
    }
    catch (err) {
        console.log(err)
    }
}

export async function UpdateJob(jobId, { companyName, logoUrl, position, salary, jobtype, remoteoffice, location, description, about, skills, information, createdAt, duration }) {
    try {
        const url = `${Backend_url}/job/edit/${jobId}`
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const params = { companyName, logoUrl, position, salary, jobtype, remoteoffice, location, description, about, skills, information, createdAt, duration }
        const response = await axios.put(url, params)
        return response.data;
    }
    catch (err) {
        console.log(err)
    }
}

