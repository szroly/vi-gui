import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Equipment } from "@/types/equipment"

export default function EquipmentsTable({ equipments }: { equipments: Equipment[] }) {
  return (
    <Table>
      <TableCaption>List of Equipments</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>VEHICLE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {equipments.map((equipment) => (
          <TableRow key={equipment.id}>
            <TableCell>{equipment.id}</TableCell>
            <TableCell>{equipment.vehicle_id}</TableCell>
            <TableCell>{equipment.equipment_name}</TableCell>
            <TableCell>{equipment?.vehicle.make}{equipment?.vehicle.model}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}