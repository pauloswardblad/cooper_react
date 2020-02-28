import axios from "axios";

const saveBmiData = async (result, entryHandler) => {
  let headers = sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  
  try {
    await axios.post("/bmi_data", 
      { 
        bmi_data: { data: { message: result } } 
      }, {
        headers: headers
      }
    );
    entryHandler();
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

const getBmiData = async () => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };

  const response = await axios.get("/bmi_data", {
    headers: headers
  });

  return response;
};

export { saveBmiData, getBmiData };