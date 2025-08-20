"use client";
import Image from "next/image";
import {
  FaTwitter,
  FaPinterestP,
  FaSpotify,
  FaWhatsapp,
} from "react-icons/fa";

export default function AuthorCommentBox() {
  return (
    <div className="container my-5">
      {/* Author Info */}
      <div className="d-flex align-items-center mb-3">
        <Image
          src="/author1.jpg" // replace with your image in /public
          alt="Author"
          width={70}
          height={70}
          className="rounded-circle me-3"
        />
        <div>
          <h5 className="fw-bold mb-1">Lucas</h5>
          <p className="mb-2 text-muted fs-6">
            Veniam fabulas facilisi cum ne, ad vero dolorem quo, duo modus
            scripserit reformidans id. An soleat senserit eos, ea tation
            quidam posidonium eam.
          </p>
          {/* Social Icons */}
          <div className="d-flex gap-3">
            <a href="#" className="text-dark fs-5">
              <FaTwitter />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaPinterestP />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaSpotify />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Comment Form */}
      <div className="mt-4">
        <h6 className="fw-bold text-center mb-2 ">LEAVE A REPLY</h6>
        <form>
          {/* Comment Textarea */}
          <div className="mb-3">
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write your comment..."
            ></textarea>
          </div>

          {/* Name, Email, Website */}
          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-4 mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-md-4 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Website"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="saveInfo" />
            <label htmlFor="saveInfo" className="form-check-label fs-6">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-dark px-4 py-2 fs-6  ">
            POST COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}
