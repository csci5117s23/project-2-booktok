import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs';

export default function MyAccount() {
  return (
    <div>
        <UserProfile />
    </div>
  )
}