import Panel from '@/components/Panel'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  return (
    <main>
      <Panel session={session}/>
    </main>
  )
}
