import { cookies } from 'next/headers';
import insurancesHandler from '@/handlers/insurances';
import { Button } from '@/components/ui/button';
import InsurancesTable from './_components/InsurancesTable';
import { Plus } from 'lucide-react';

const getInsurances = async () => {
  const cookieStore = await cookies();
  const appToken = cookieStore.get('jwt')?.value || '';

  if( appToken ) {
    const response = await insurancesHandler.getInsurances( appToken, '/insurances' );
    const data = await response.data;
    return data;
  }
}

export default async function Insurances() {
  const insurances = await getInsurances();
  console.log({ insurances });
  return (
    <div className='mx-10'>
      <Button className='mb-5'>
        <Plus className="mr-2" />
        ADD INSURANCE
      </Button>

      <InsurancesTable insurances={insurances} />
    </div> 
  );
}