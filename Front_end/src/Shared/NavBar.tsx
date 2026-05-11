import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="grid grid-cols-3 items-center bg-slate-800 p-4 text-white">
      {/* Logo Section */}
      <div className="flex justify-start">
        <img src={logo} alt="logo" className="w-16 object-contain" />
      </div>

      {/* Center Links (02) */}
      <div className="text-center">Menu Items</div>

      {/* Right Section (03) */}
      <div className="text-right">Profile / Sign In</div>
    </nav>
    </>
  );
}
