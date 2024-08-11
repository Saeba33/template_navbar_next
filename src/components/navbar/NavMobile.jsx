import Link from "next/link";

export default function NavMobile() {
  return (
    <nav className="">
      <Link to="/about" className="">
        About
      </Link>
      <Link to="/contact" className="">
        Contact
      </Link>
    </nav>
  );
}
