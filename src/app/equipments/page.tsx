import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cookies } from 'next/headers';


const getEquipments = async () => {
  const cookieStore = await cookies();
  const appToken = cookieStore.get('jwt')?.value || '';

  if (appToken) {
    // const response = await equipmentsHandler.getEquipments(appToken, '/equipments');
    // const data = await response.data;
    // return data;
  }
}

export default async function Equipments() {
  return (
    <div className="mx-10">
      <Button className='mb-5'>
        <Plus className="mr-2" />
        ADD EQUIPMENT
      </Button>

      {/* <EquipmentsTable equipments={equipments} /> */}
    </div>
  )
}