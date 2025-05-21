import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cookies } from 'next/headers';
import firstAidHandler from '@/handlers/firstAid';
import FirstAidsTable from './_components/FirstAidsTable';

const getFirstAid = async () => {
    const cookieStore = await cookies();
    const appToken = cookieStore.get('jwt')?.value || '';

    if (appToken) {
      const response = await firstAidHandler.getFirstAids(appToken, '/first_aid');
      const data = await response.data;
      return data;
    }
}

export default async function FirstAid() {
  const firstAids = await getFirstAid();
  console.log(firstAids);
  return (
    <div className="mx-10">
      <Button className='mb-5'>
        <Plus className="mr-2" />
        ADD FIRST AID
      </Button>

      <FirstAidsTable firstAids={firstAids} />
    </div>
  )
}