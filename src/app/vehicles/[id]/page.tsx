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
        <h1 className='text-4xl font-bold '>{ vehicle.make }</h1>
        <h2 className='text-2xl'>{ vehicle.model }</h2>
      </div>
      <div className='flex flex-wrap text-xl justify-around'>
        <div className='w-lg my-[20px] border-l-10 border-l-cyan-900 bg-cyan-700 text-white p-3'>
          <p>Production year: { vehicle.production_year }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-cyan-900 bg-cyan-700 text-white p-3'>
          <p>Engine size: { vehicle.engine_size } ccm</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-cyan-900 bg-cyan-700 text-white p-3'>
          <p>Engine power: { vehicle.engine_power } hp</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-cyan-900 bg-cyan-700 text-white p-3'>
          <p>Registration number: { vehicle.registration_number }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-cyan-900 bg-cyan-700 text-white p-3'>
          <p>Registration expiry: { new Date(vehicle.registration_expiry).toISOString().slice(0, 10) }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-cyan-900 bg-cyan-700 text-white p-3'>
          <p>Chassis number: { vehicle.chassis_number }</p>
        </div>
      </div>
      
      {/* First aid data  */}

      <div className='text-center  mb-5 font-mono'>
        <h2 className='text-4xl font-bold my-[20px]'>First Aid</h2>
      </div>
      <div className='flex flex-wrap text-xl justify-around'>
        <div className='w-lg my-[20px] border-l-10 border-l-lime-800 bg-lime-500 text-white p-3'>
          <p>Manufacturer: { vehicle.firstAid[0].manufacturer }</p>
        </div>
        <div
          className={`w-lg my-[20px] border-l-10 ${
            new Date(vehicle.firstAid[0].expire_date) < new Date()
              ? 'bg-red-700 border-l-red-900'
              : 'bg-green-700 border-l-green-900'
          } text-white p-3`}
        >
          <p>
            Expire date: {new Date(vehicle.firstAid[0].expire_date).toISOString().slice(0, 10)}
          </p>
        </div>
      </div>

      {/* Insurance data */}

      <div className='text-center  mb-5 font-mono'>
        <h2 className='text-4xl font-bold my-[20px]'>Insurance</h2>
      </div>
      <div className='flex flex-wrap text-xl justify-around'>
        <div className='w-lg my-[20px] border-l-10 border-l-sky-900 bg-sky-500 text-white p-3'>
          <p>Price: { vehicle.insurance[0]?.price }</p>
        </div>
        <div
          className={`w-lg my-[20px] border-l-10 ${
            new Date(vehicle.firstAid[0].expire_date) < new Date()
              ? 'bg-red-700 border-l-red-900'
              : 'bg-green-700 border-l-green-900'
          } text-white p-3`}
        >
          <p>
            Expire date: {new Date(vehicle.firstAid[0].expire_date).toISOString().slice(0, 10)}
          </p>
        </div>
      </div>

      {/* Service data */}

      <div className='text-center  mb-5 font-mono'>
        <h2 className='text-4xl font-bold my-[20px]'>Service</h2>
      </div>
      <div className='flex flex-wrap text-xl justify-around'>
        <div className='w-lg my-[20px] border-l-10 border-l-sky-900 bg-indigo-700 text-white p-3'>
          <p>Price: { vehicle.service[0]?.price }</p>
        </div>
        <div className='w-lg my-[20px] border-l-10 border-l-sky-900 bg-indigo-700 text-white p-3'>
          <p>
            Date: { vehicle.service[0]?.service_date }
          </p>
        </div>
        <div>
          <p className='w-[60vw] h-[auto] my-[20px] border-l-10 border-l-sky-900 bg-indigo-700 text-white p-3'>
            { vehicle.service[0]?.description }
          </p>
        </div>
      </div>

      {/* Equipments data */}

      <div className='text-center  mb-5 font-mono'>
        <h2 className='text-4xl font-bold my-[20px]'>Equipments</h2>
      </div>
      <div className='flex flex-wrap text-xl justify-around'>
        <div className='w-lg my-[20px] border-l-10 border-l-slate-900 bg-slate-700 text-white p-3'>
          <p>List: { vehicle.equipments[0]?.equipment_name }</p>
        </div>
       
      </div>

    </div>
  )
}