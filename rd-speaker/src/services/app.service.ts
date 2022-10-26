// import axios from "axios"

// export class AppService{
//     public async loginUser(loginData: any){
//         const postData = {
//             email: loginData.email,
//             password: loginData.password
//         }
//           const response = await axios.post("https://leoqa.radiusdirect.net/coreapi/v2/userlogin", postData)
//           .then((response: any) => {
//                  return response.data;
                 
//           })
//           console.log("response", response)
//           return response;
//     }
// }

import axios from "./index";

export class AppService {
      
    get(type: any) {
      return axios().get('/'+ type);
    }
    post(type: any,data: any) {
      return axios().post('/'+ type, data);
    }
    put(id: string, data: any) {
      return axios().put(`/${id}`, data);
    }
    delete(id: string) {
      return axios().delete(`/${id}`);
    }
  }
