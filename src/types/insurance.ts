export interface Insurance {
  id: number,
  type: string;
  price: number;
  expire_date: string;
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