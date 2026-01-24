import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <section
      id="breadcrumbs"
      className="breadcrumbs"
      style={{ backgroundColor: "steelblue" }}
    >
      <div className="container pt-5">
        <div className="d-flex justify-content-between list-unstyled w-100">
          <h2>About</h2>
          <ol >
            <li>
              <Link href="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="text-white">About</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
