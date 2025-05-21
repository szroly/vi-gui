export interface FirstAid {
  id: number;
  manufacturer: string;
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