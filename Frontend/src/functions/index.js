import axios from "axios";

const baseURL = "http://localhost:3001/patient";



export const getPatients = async () => {
  const response = await axios.get(baseURL);

  return response.data.patients;
};

export const postPatient = async (patient) => {
  try {
    const response = await axios.post(baseURL, patient);
  } catch (error) {
    console.log(error);
  }
};

export const updatePatient = async (patient) => {
  try {
    const response = await axios.put(baseURL, patient);
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = async (id) => {
  try {
    const delURL = baseURL + "/" + id
    const response = await axios.delete(delURL);
    window.location.reload()
    console.log(response)
  } catch (error) {
    console.log(error);
  }
}

export const handleFormat = (date) =>{
  const [month, day, year] = date.split("/");
return year + "-" + month + "-" + day
}