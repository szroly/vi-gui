export interface Equipment {
  id: number,
  vehicle_id: number;
  equipment_name: string;
  created_at: string;
  updated_at: string;
  vehicle: {
    id: number;
    make: string;
    model: string;
    year: number;
    created_at: string;
    updated_at: string;
  }
}