import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Hércules Portfolio
        </Link>
      </div>
      <a href="" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;