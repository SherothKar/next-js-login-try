// import useUser from '/lib/useUser'
import Layout from '../common/layout'
import { useRouter } from 'next/router';
const Profile = () => {
  // Fetch the user client-side
  // const { user } = useUser({ redirectTo: '/login' })

  // Server-render loading state
  if(false) {
    
    const router = useRouter();
    router.push("/components/dashboard");
  }
 
else{
  // Once the user request finishes, show the user
  return (
 
      <h1>Your Profile</h1>
  
  )
}
}

export default Profile