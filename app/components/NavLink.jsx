import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pr-4 text-slate-400 sm:text-xl rounded md:p-0
      hover:text-black"
    >
      {title}
    </Link>
  );
};
export default NavLink;
