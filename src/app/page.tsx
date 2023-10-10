import getSheetsData from "./api/sheets";
import { SheetData } from "./components/SheetData";
import { getServerSession } from "next-auth";

export default async function Home() {
  const sheetdata = await getSheetsData();
  const session = await getServerSession();
  const user = session?.user?.name;

  return (
    <>
      {user && <h1>Hello {user}</h1>}
      <SheetData sheetdata={sheetdata} />
    </>
  );
}
