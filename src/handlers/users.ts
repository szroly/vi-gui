import {instance} from "@/lib/axiosinstance";
import { AxiosResponse } from "axios";

interface loginPayload {
  email: string;
  password: string;
}

const userHandler = {
  login: async ( token: string | null, url: string, payload: loginPayload ): Promise<AxiosResponse | any> => {
    try {
      const response = await instance( token ).post( url, payload )
      console.log({instance})
      return response
    } catch ( error: any ) {
      return error.response
    }
  },

  logout: async ( token: string, url: string): Promise<AxiosResponse | any> => {
    try {
      const response = await instance( token ).post( url )
      return response
    } catch ( error: any ) {
      return error.response
    }
  },

  check: async ( token: string, url: string): Promise<AxiosResponse | any> => {
    try {
      const response = await instance( token ).get( url )
      return response
    } catch ( error: any ) {
      return error.response
    }
  }
}

export default userHandler;