function Footer() {
    return (
      <footer className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Left Side - Logo & Copyright */}
          <div>
            <h2 className="text-2xl font-bold">NVK ENT Hospital</h2>
            <p className="mt-2 text-sm">
              &copy; {new Date().getFullYear()} NVK ENT Hospital. All rights
              reserved.
            </p>
            <a href="https://enego.co.in/" className="mt-2 text-sm"> Designed by Enego Services Pvt. Ltd. </a>
          </div>
  
          {/* Right Side - Social Media Icons */}
          <div className="mt-6 md:mt-0 flex space-x-4">
            
            <h4> Contact us:</h4>
            <p>📞 +91 8351010555</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;