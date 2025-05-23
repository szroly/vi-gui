'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Vehicle } from "@/types/vehicle"

import { useRouter } from "next/navigation";


export default function VehiclesTable({ vehicles }: { vehicles: Vehicle[] }) {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>List of Vehicles</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Make</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Engine Power (hp)</TableHead>
          <TableHead>Engine Size (ccm)</TableHead>
          <TableHead>Production Year</TableHead>
          <TableHead>Registration Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vehicles.map((vehicle) => (
          <TableRow 
            key={vehicle.id} 
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/vehicles/${vehicle.id}`)}
          >
            <TableCell>{vehicle.make}</TableCell>
            <TableCell>{vehicle.model}</TableCell>
            <TableCell>{vehicle.engine_power}</TableCell>
            <TableCell>{vehicle.engine_size}</TableCell>
            <TableCell>{vehicle.production_year}</TableCell>
            <TableCell>{vehicle.registration_number}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}