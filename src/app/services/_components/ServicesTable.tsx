import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Service } from "@/types/service"

export default function ServicesTable({ services }: { services: Service[] }) {
  return (
    <Table>
      <TableCaption>List of Services</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>DESCRIPTION</TableHead>
          <TableHead>PRICE</TableHead>
          <TableHead>VEHICLE ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell>{service.id}</TableCell>
            <TableCell>{service.description}</TableCell>
            <TableCell>{service.price}</TableCell>
            <TableCell>{service.vehicle_id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}