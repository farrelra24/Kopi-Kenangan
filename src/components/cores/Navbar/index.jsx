function Navbar() {
  return (
    <div className="navbar bg-red-100 px-40 h-20 fixed z-10">
      {/* NAVBAR START */}
      <div className="navbar-start">
        <ul className="menu menu-horizontal gap-8">
          <li>
            <details>
              <summary className="font-bold text-teal-900">BRAND</summary>
              <ul className="p-2">
                <li>
                  <a className="text-teal-900">Jiwa Group</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-bold text-teal-900">
                PARTNERSHIP
              </summary>
              <ul className="p-2">
                <li>
                  <a className="text-teal-900">Brand Licensing</a>
                </li>
                <li>
                  <a className="text-teal-900">Location Partnership</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* NAVBAR CENTER */}
      <div className="navbar-center">
        <img src="/navbar/jiwa-logo.png" className="h-[40px]" />
      </div>
      {/* NAVBAR END */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal items-center">
          <li>
            <a className="font-bold text-teal-900">JIWA+</a>
          </li>
          <li>
            <details>
              <summary className="font-bold text-green-800">CORPORATE</summary>
              <ul className="p-2">
                <li>
                  <a className="text-green-800">About Us</a>
                </li>
                <li>
                  <a className="text-green-800">Career</a>
                </li>
                <li>
                  <a className="text-green-800">Contact Us</a>
                </li>
                <li>
                  <a className="text-green-800">ESG</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-bold text-teal-900">ACCOUNT</summary>
              <ul className="">
                <div className="">
                  <div className="my-2">
                    <li>Login to</li>
                  </div>
                  <div className="my-2 p-2">
                    <li>
                      <button className="border border-black text-teal-900 rounded-none">
                        Portal Partner
                      </button>
                    </li>
                  </div>
                  <div className="my-2">
                    <li>
                      <button className="border border-black text-teal-900 rounded-none">
                        JILID+ PORTAL
                      </button>
                    </li>
                  </div>
                </div>
              </ul>
            </details>
          </li>
          <li>
            <img src="/navbar/lang-id.png" alt="" className="w-12 hover:w-14" />
          </li>
          <div className="">|</div>
          <li>
            <img src="/navbar/lang-en.png" alt="" className="w-12 hover:w-14" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
