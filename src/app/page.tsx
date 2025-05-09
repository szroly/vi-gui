
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import { getData } from '@/lib/axiosinstance';
// import { useAuth } from '@/hooks/useAuth';
import vehicleHandler from '@/handlers/vehicles';
import { cookies } from 'next/headers';
import { Vehicle } from '@/types/vehicle';

const getVehicles = async () => {
  // const { token } = useAuth();
  const cookieStore = await cookies();
  const appToken = cookieStore.get('jwt')?.value || '';

  if (appToken) {
    const response = await vehicleHandler.getVehicles(appToken, '/vehicles');
    const data = await response.data;
    return data;
  }
};

export default async function Home() {
  const vehicles = await getVehicles();
  console.log({vehicles})
  return (
    <div className="flex mb-10 md:mb-0  md:flex-row flex-col items-center justify-center h-screen how gap-20">
      {vehicles?.map(( vehicle: Vehicle ) => (
        <Card key={ vehicle.id } className=' h-[300px] md:px-30 px-10'>
          <CardHeader>
            <CardTitle className="text-center md:py-2">{ vehicle.make } { vehicle.model }</CardTitle>

            {/* <CardDescription>NS-563 SP</CardDescription> */}
          </CardHeader>
          <hr />
            <CardContent className="leading-8">
            <p>
              <b>Engine power(hp):</b> { vehicle["engine_power"] }
            </p>
            <p>
              <b>Engine size(ccm):</b> { vehicle["engine_size"] }
            </p>
            <p>
              <b>Production year:</b> { vehicle["production_year"] }
            </p>
            </CardContent>
          <hr />
          <CardFooter className="flex items-center justify-center ">
           { vehicle.registration_number }
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
