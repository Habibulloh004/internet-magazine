import React from "react";
import Heade from "./header/Header"

function Header() {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">
            <a href="#">
              <img src="assets/img/ung.png" alt="" />
            </a>
          </div>
          <input type="checkbox" id="check" />
          <ul>
            <div className="dropdown">
              <button onclick="myFunction()" className="dropbtn">
                Biz haqimizda <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">"UNG training MCHJ"</a>
                <a href="#">Tashkiliy tuzilma</a>
                <a href="#">Tarkibiy bo'linmalar</a>
                <a href="assets/pages/rahbariyat/rahbariyat.html">Rahbariyat</a>
                <a href="#">Hodimlar</a>
                <a href="#">Faoliyat maqsadi va vazifalari</a>
                <a href="#">Jamiyatning strategik rivojlanishi</a>
                <div className="dropdown5">
                  <button onclick="myFunction5()" className="dropbtn5">
                    Sohaga oid meyoriy hujjatlar
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <div id="myDropdown5" className="dropdown-content5">
                    <a href="#">O'zbekiston Respublikasi qonunlari</a>
                    <a href="#">
                      O'zbekiston Respublikasi Prezidenti Farmonlari, qarorlari
                      va farmoyishlari
                    </a>
                  </div>
                </div>
                <a href="#">Faxriy hodimlar</a>
                <a href="#">Bog'lanish uchun ma'lumotlar</a>
                <a href="#">Murojaatlar statistikasi</a>
                <a href="#">Bo'sh ish o'rinlari</a>
              </div>
            </div>
            <div className="dropdown2">
              <button onclick="myFunction2()" className="dropbtn2">
                Biznesga oid <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div id="myDropdown2" className="dropdown-content2">
                <div className="dropdown6">
                  <button onclick="myFunction6()" className="dropbtn6">
                    Konkurslar
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <div id="myDropdown6" className="dropdown-content6">
                    <a href="#">"O'zbekneftgaz" AJ</a>
                    <a href="#">"Muborak" QCHB</a>
                    <a href="#">"Sho'rtan" NGQCHB</a>
                    <a href="#">"Muborak" NGQCHB</a>
                    <a href="#">"Gazli" NGQCHB</a>
                    <a href="#">"Ustyurt" GQCHB</a>
                    <a href="#">"Vodiy" NGQCHB</a>
                  </div>
                  <a href="#">Tijorat takliflari</a>
                </div>
              </div>
            </div>
            <div className="dropdown3">
              <button onclick="myFunction3()" className="dropbtn3">
                Investor va aksiyadorlar uchun{" "}
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div id="myDropdown3" className="dropdown-content3">
                <a href="#">Ustav va ichki nizomlar</a>
                <div className="dropdown7">
                  <button onclick="myFunction7()" className="dropbtn7">
                    Hisobotlar <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <div id="myDropdown7" className="dropdown-content7">
                    <a href="#">9</a>
                    <a href="#">8</a>
                    <a href="#">7</a>
                  </div>
                </div>
                <a href="#">Investitsion loyihalar</a>
              </div>
            </div>
            <div className="dropdown4">
              <button onclick="myFunction4()" className="dropbtn4">
                Korrupsiyaga qarshi <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div id="myDropdown4" className="dropdown-content4">
                <a href="#">"O'zbekneftgaz" AJ boshqaruvi raisi Murojaati</a>
                <a href="#">Lokal meyoriy hujjatlar</a>
                <a href="#">Aloqa kanallari</a>
                <a href="#">Ko'p beriladigan savollar</a>
                <a href="#">Korrupsiyaga qarshi anonim so'rovnoma</a>
                <a href="#">Yangiliklar</a>
                <a href="#">Hisobotlar</a>
              </div>
            </div>
          </ul>

          <label for="check" className="cover"></label>
          <label className="mobNav" for="check">
            <i className="fa-solid fa-bars"></i>
          </label>
        </nav>
      </header>
    </div>
  );
}

export default Header;
