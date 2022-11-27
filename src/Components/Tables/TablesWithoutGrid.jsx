import { Table, TableCell, TableRow, tableCellClasses } from "@mui/material";
import React from "react";
import "./Tables.css";

const data = {
  name: ["Size", "Color", "Dimensions"],
  value: ["L-Shape", "Blue Opal", "255cm x 178cm x 86.5cm"],
};

const TablesWithoutGrid = ({ name, value }) => {
  return (
    <div>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        className="inline-width"
      >
        {data.name.map((item, index) => {
          return (
            <TableRow>
              <TableCell className="specification-name">{item}</TableCell>
              <TableCell className="specification-value">
                {data.value[index]}
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};

export default TablesWithoutGrid;
