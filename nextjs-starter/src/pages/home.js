import { UserButton } from "@clerk/clerk-react";


export default function ToDos() {
  return <>
    <h1>Home Page</h1>
    <UserButton afterSignOutUrl="/"/>
  </>
}