import 'dotenv/config'

export default function Home() {
  console.log(process.env)
  const user = JSON.parse(process.env.GOOGLE_MADAM_HUNGRY ?? "{}")?.project_id || "default user"

  return (
      <h1>Hello {user}</h1>
  )
}
