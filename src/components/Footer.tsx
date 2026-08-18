const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 py-8 text-center">
      <p className="text-sm text-white/40">
        © {new Date().getFullYear()} Gloria. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
