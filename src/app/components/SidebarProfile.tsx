import Image from "next/image";

export default function SidebarProfile() {
  return (
    <div className="container">
      {/* About Me Section */}
      <div className="text-start mb-4">
        <Image
          src="/author1.jpg"
          alt="Profile"
          className="rounded-circle img-fluid"
          width={165}
          height={165}
        />
        <h5 className="fw-bold mt-3 text-uppercase fs-6 text-start">
          About Me
        </h5>
        <p className="mb-3 text-secondary subtitle">
          Lorem ipsum dolor sit amet, ad dolor diceret erroribus eos, ut est
          nisl summo sententiae, epicuri concludaturque ius no. Id mucius
          civibus mea. Eros wisi intellegam qu
        </p>
        <Image
          src="/signature.png"
          alt="Signature"
          className="img-fluid"
          width={150}
          height={50}
        />
      </div>

      {/* Authors Section */}
      <div>
        <h6 className="fw-bold text-uppercase mb-3">Authors</h6>
        <div className="mb-3 d-flex align-items-center">
          <Image
            src="/author1.jpg"
            alt="Claire Payne"
            className="rounded-circle flex-shrink-0"
            width={65}
            height={65}
          />
          <div className="ms-3">
            <h6 className="mb-1 fw-bold">Claire Payne</h6>
            <small className="text-muted">
              Sample Live post: Live updates from White House
            </small>
          </div>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <Image
            src="/author1.jpg"
            alt="Lucas"
            className="rounded-circle flex-shrink-0"
            width={65}
            height={65}
          />
          <div className="ms-3">
            <h6 className="mb-1 fw-bold">Lucas</h6>
            <small className="text-muted">
              In vel iudico nemore voluptua te porro
            </small>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <Image
            src="/author1.jpg"
            alt="Neil MacLeod"
            className="rounded-circle flex-shrink-0"
            width={65}
            height={65}
          />
          <div className="ms-3">
            <h6 className="mb-1 fw-bold ">Neil MacLeod</h6>
            <small className="text-muted ">
              Atomorum mei Vide etiam viris et vix
            </small>
          </div>
        </div>
      </div>
      <div className=" py-5">
        <Image
          src="/banner300.jpg"
          alt="banner"
          width={250}
          height={250}
          className=" banner300"
        />
      </div>
    </div>
  );
}
