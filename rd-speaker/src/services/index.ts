import axios from "axios"
export default() => {
      const options = {
          baseURL :"https://leoqa.radiusdirect.net/coreapi",
          headers:{
              Authorization: "",
              "Content-Type": "application.json"
          } 
       }
       const instance = axios.create(options)
       return instance
    }