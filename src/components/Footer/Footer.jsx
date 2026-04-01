import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-white p-16 pt-20 justify-around min-h-96">
      <aside>
        <h1 className="text-4xl">Digitools</h1>
        <p>
          Premium digital tools for creators, professionals, and businesses.
        </p>
        <p>Work smarter with our suite of powerful tools.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Products</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Templates</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Documentation</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Community</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
