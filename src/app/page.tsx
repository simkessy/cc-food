import getSheetsData from "./api/sheets";
import { SheetData } from "./components/SheetData";
import { UserName } from "./components/UserName";

export default async function Home() {
  const sheetdata = await getSheetsData();

  return (
    <>
      <UserName />
      <SheetData sheetdata={sheetdata} />
    </>
  );
}
