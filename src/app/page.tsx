import 'dotenv/config'
import getSheetsData from './api/sheets'


export default async function Home() {
  const sheetdata = await getSheetsData()

  console.log('sheetdata', sheetdata)

  const user = JSON.parse(process.env.GOOGLE_MADAM_HUNGRY ?? "{}")?.project_id || "default user"

  return (
    <>
      <h1>Hello {user}</h1>
      <h3>Sheet Data</h3>
      <ul>{
        sheetdata.map((data,index)=> <li key={index}>{data}-{index}</li>)
      }</ul>
    </>
  )
}
