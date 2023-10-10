"use client";

import { useSession } from "next-auth/react";
import { SheetResponse } from "../api/sheets";

type Props = {
  sheetdata: SheetResponse[];
};

export const SheetData = ({ sheetdata }: Props) => {
  const { data: session } = useSession();

  if (session?.user === undefined) {
    return <p>PLEASE LOGING TO VIEW SITE</p>;
  }

  return (
    <>
      <h3>Sheet Data</h3>
      <ul>
        {sheetdata.map((data, index) => (
          <li key={index}>
            {index} - {data}
          </li>
        ))}
      </ul>
    </>
  );
};
