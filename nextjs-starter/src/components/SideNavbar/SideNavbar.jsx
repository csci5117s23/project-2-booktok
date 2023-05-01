import Link from 'next/link';

export default function SideNavbar() {
  return (
    <aside className='menu' style={{ flexDirection: 'column' }}>
      <p className='menu-label'>Suggested</p>
      <ul className="menu-list">
        <li><Link href="/"><span>Open</span></Link></li>
        <li><Link href="/"><span>Close</span></Link></li>
      </ul>

      <p className="menu-label">
        Category
      </p>
      <ul className="menu-list">
        <li><Link href="/"><span>Noodles</span></Link></li>
        <li><Link href="/"><span>Rice</span></Link></li>
      </ul>
      <p className="menu-label">
        Settings
      </p>
      <ul className="menu-list">
        <li><Link href="/Profile"><span>Profile</span></Link></li>
        <li><Link href="/"><span>Security</span></Link></li>
      </ul>
    </aside>
  );
}