import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { FirstAid } from "@/types/firstAid"

export default function ServicesTable({ firstAids }: { firstAids: FirstAid[] }) {
  return (
    <Table>
      <TableCaption>List of first aids  </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>MANUFACTURER</TableHead>
          <TableHead>VEHICLE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {firstAids.map((firstAid) => (
          <TableRow key={firstAid.id}>
            <TableCell>{firstAid.id}</TableCell>
            <TableCell>{firstAid.manufacturer}</TableCell>
            <TableCell>{firstAid?.vehicle.make}{firstAid?.vehicle.model}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}