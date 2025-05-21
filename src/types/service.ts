export interface Service {
  id: number;
  description: string;
  price: number;
  vehicle_id: number;
  created_at: string;
  updated_at: string;
  vehicle: {
    id: number;
    make: string;
    model: string;
    year: number;
    created_at: string;
    updated_at: string;
  };
}