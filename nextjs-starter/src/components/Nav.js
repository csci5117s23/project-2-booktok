import Link from 'next/link';
import 'bulma/css/bulma.min.css';
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs';

const Nav = () => {
    return (
        <aside className="menu">
            {/* <p class="menu-label">My To-do</p> */}
            <ul className="menu-list">
                <li>
                    <UserButton></UserButton>
                </li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/review">Review</Link>
                </li>
                <li>
                    <Link href="/search"> Search</Link>
                </li>
                <li>
                    <Link href="/map"> Map</Link>
                </li>
                <li>
                   <Link href="/profile"> Profile</Link>
                </li>
                <li>
                    <Link href="/camera"> Camera</Link>
                </li>
            </ul>
        </aside>

    )
}

export default Nav