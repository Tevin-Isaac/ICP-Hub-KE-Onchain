import React, { useEffect, useState } from "react";
import NavBrand from "../../atoms/NavBrand";
import NavLink from "../../atoms/NavLink";
import ButtonLink from "../../atoms/Button/ButtonLink";
import Container from "../../templates/Container";
import { FiMenu, FiX } from "react-icons/fi";
import UAParser from "ua-parser-js";
import useMobileDeviceDetection from "../../../hooks/useMobileDetection";
import useGetBrowserName from "../../../hooks/useGetBrowserName";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLightSectionVisible, setIsLightSectionVisible] =
    useState<boolean>(false);
  const browserName = useGetBrowserName();
  const isMobile = useMobileDeviceDetection();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const lightSectionElement = document.querySelector("[data-light-section]");

    if (lightSectionElement) {
      const lightSectionTop = lightSectionElement.getBoundingClientRect().top;
      const lightSectionBottom =
        lightSectionElement.getBoundingClientRect().bottom;

      if (
        (lightSectionTop >= 0 && lightSectionTop <= window.innerHeight) ||
        (lightSectionBottom >= 0 && lightSectionBottom <= window.innerHeight)
      ) {
        setIsLightSectionVisible(true);
      } else {
        setIsLightSectionVisible(false);
      }
    }

    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("h-screen");
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("h-screen");
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {!isScrolled && (
        <nav
          className={`pt-8 w-full top-0 left-0 z-30 ${
            isScrolled ? "fixed" : "absolute"
          }`}
        >
          <Container>
            <div
              className={`${
                browserName === "Firefox" ? "bg-gray-900" : "bg-light"
              } ${
                isLightSectionVisible ? "bg-[#FFEDED]" : ""
              } px-6 py-4 w-full rounded-md backdrop-blur-3xl ${
                isScrolled || isOpen ? "" : "lg:bg-transparent lg:px-0"
              }`}
            >
              <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">

                <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                  <NavBrand />
                  <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <div
                      className={`text-white text-2xl ${
                        isMobile ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      {isOpen ? <FiX /> : <FiMenu />}
                    </div>
                  </div>
                </div>
                
                {/* <div className="lg:flex lg:justify-end lg:items-end"> */}
                  <div
                    className={`${
                      isOpen ? "" : "hidden "
                    } space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
                  >
                    <NavLink href="/education" value="Education" canActive={true} />
                    <NavLink href="/events" value="Events" canActive={true} />
                    <NavLink href="/blog" value="Blog" canActive={true} />
                    <NavLink href="/about" value="About" canActive={true} />
                    <NavLink href="/partners" value="Partners" canActive={true} />
                  </div>
                  
                  <div className={`${isOpen ? "" : "hidden "} lg:block mt-5 ml-6 lg:mt-0`}>
                    <ButtonLink
                      value="Join Us"
                      style="solid"
                      color="#e09f41"
                      size="small"
                      href="/contact"
                    />
                  </div>
                {/* </div> */}

              
              </div>
            </div>
          </Container>
        </nav>
      )}
    </>
  );
};

export default NavBar;
