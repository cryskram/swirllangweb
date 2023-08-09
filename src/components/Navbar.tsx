import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-slate-900 text-slate-200 p-2 rounded-xl">
        <div className="flex items-center gap-1">
          <Image
            src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo-transparent.png"
            width={46}
            height={46}
            alt="Logo"
          />
          <h1 className="text-2xl font-semibold">Swirl</h1>
        </div>
        <div className="flex gap-3">
          <Link className="links" href="/">
            Docs
          </Link>
          <Link className="links" href="/">
            Download
          </Link>
          <Link className="links" href="/">
            About
          </Link>
          <Link className="links" href="/">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
