export default function Home() {
  const user = JSON.parse(process.env.GOOGLE_MADAM_HUNGRY)?.project_id || "default user"

  return (
      <h1>`Hello ${user}`</h1>
  )
}
