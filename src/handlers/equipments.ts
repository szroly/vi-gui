import instance from "@/lib/axiosinstance";
import { AxiosResponse } from "axios";

const equipmentsHandler = {
  getEquipments: async ( token: string | null, url: string ): Promise<AxiosResponse> => {
    try {
      const response = await instance( token ).get( url );
      return response;
    } catch ( error: any ) {
      return error.response;
    }
  },
}

export default equipmentsHandler;