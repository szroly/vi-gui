import { cookies } from 'next/headers';
import vehicleHandler from '@/handlers/vehicles';
import { Vehicle } from '@/types/vehicle';

const getVehicle = async (id: string) => {
  const cookieStore = await cookies();
  const appToken = cookieStore.get('jwt')?.value || '';

  if (appToken) {
    const response = await vehicleHandler.getVehicles(appToken, `/vehicles/${id}`);
    const data = await response.data;
    return data;
  }
}

export default async function VehicleShow({ params }: { params: { id: string } }) {
  const vehicle = await getVehicle(params.id);
  console.log({vehicle})
  return (
    <div className="w-[90%] mx-auto bg-zinc-500/10 rounded-sm p-5 max-w-[1400px]">
      
      {/* Vehicle information */}

      <div className='text-center  mb-5 font-mono'>
        <h1 className='text-4xl font-bold '>{ vehicle[0].make }</h1>
        <h2 className='text-2xl'>{ vehicle[0].model }</h2>
      </div>
      <div className='flex flex-wrap text-xl justify-around'>
        <div className='w-lg my-[20px] border-l-10 border-l-amber-600 bg-blue-950 text-white p-3'>
          <p>Production year: { vehicle[0].production_year }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-amber-600 bg-blue-950 text-white p-3'>
          <p>Engine size: { vehicle[0].engine_size } ccm</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-amber-600 bg-blue-950 text-white p-3'>
          <p>Engine power: { vehicle[0].engine_power } hp</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-amber-600 bg-blue-950 text-white p-3'>
          <p>Registration number: { vehicle[0].registration_number }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-amber-600 bg-blue-950 text-white p-3'>
          <p>Registration expiry: { new Date(vehicle[0].registration_expiry).toISOString().slice(0, 10) }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-amber-600 bg-blue-950 text-white p-3'>
          <p>Chassis number: { vehicle[0].chassis_number }</p>
        </div>
      </div>
      
      {/* First aid data  */}

      <div className='text-center  mb-5 font-mono'>
        <h2 className='text-4xl font-bold '>First Aid</h2>
      </div>

    </div>
  )
}