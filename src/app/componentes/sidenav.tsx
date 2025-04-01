import Link from 'next/link';
import NavLinks from './nav-links';
import ProfileModal from './profilemodal';

export default function SideNav() {

  return (
  
    <>

    <div id="nav_lateral" className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900">

      <NavLinks></NavLinks>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      </div>

      <ProfileModal></ProfileModal>
    </div>

    </>
  );
}