import vehicleHandler from '@/handlers/vehicles';
import { cookies } from 'next/headers';
import VehiclesTable from './_components/VehiclesTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const getVehicles = async () => {
  const cookieStore = await cookies();
  const appToken = cookieStore.get('jwt')?.value || '';

  if (appToken) {
    const response = await vehicleHandler.getVehicles(appToken, '/vehicles');
    const data = await response.data;
    return data;
  }
};

export default async function Vehicles() {
  const vehicles = await getVehicles();
  return (
    <div className="mx-10">
      {/* <Button variant="ghost">Add vehicle</Button> */}
      <Button className='mb-5'>
        <Plus className="mr-2" />
        ADD VEHICLE
      </Button>

      <VehiclesTable vehicles={vehicles} />
    </div>
  );
}
