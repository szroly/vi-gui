import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cookies } from 'next/headers';
import servicesHandler from '@/handlers/services';
import ServicesTable from './_components/ServicesTable';

const getServices = async () => {
  const cookieStore = await cookies();
  const appToken = cookieStore.get('jwt')?.value || '';

  if (appToken) {
    const response = await servicesHandler.getServices(appToken, '/services');
    const data = await response.data;
    return data;
  }
}

export default async function Services() {
  const services = await getServices();
  console.log(services);
  return (
    <div className="mx-10">
      <Button className='mb-5'>
        <Plus className="mr-2" />
        ADD SERVICE
      </Button>

      <ServicesTable services={services} />
    </div>
  )
}