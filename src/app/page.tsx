export default function Home() {

  return (
      <h1>`Hello World {JSON.parse(process.env.GOOGLE_MADAM_HUNGRY).project_id}`</h1>
  )
}
