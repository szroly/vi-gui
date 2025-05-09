import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Insurance } from "@/types/insurance"

export default function InsurancesTable({ insurances }: { insurances: Insurance[] }) {
  return (
    <Table>
      <TableCaption>List of Insurances</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>TYPE</TableHead>
          <TableHead>PRICE</TableHead>
          <TableHead>EXPIRE DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {insurances.map((insurance) => (
          <TableRow key={insurance.id}>
            <TableCell>{insurance.id}</TableCell>
            <TableCell>{insurance.type}</TableCell>
            <TableCell>{insurance.price}</TableCell>
            <TableCell>{insurance.expire_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}