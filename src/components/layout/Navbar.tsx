import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [fill, setFill] = useState(false);

  // hide navigation bar functionality
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      if (lastScrollY > scrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setFill(window.pageYOffset > 120);
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", updateScroll); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScroll); // clean up
    };
  }, [show]);

  return (
    <div className={`fixed left-[0] w-[100%] duration-[0.3s] z-10  ${show ? "top-[-60px]" : "top-[0]"} ${fill && "bg-main"}`}>
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between h-[60px]  relative px-[60px] xl:px-[30px]">
          <div className="flex gap-x-[22px] text-[18px] xl:text-[14px] xl:gap-x-[16px] md:hidden">
            {[
              { title: "New arrival", path: "/" },
              { title: "Cashmere", path: "/products" },
              { title: "Leather", path: "/" },
              { title: "Cotton", path: "/" },
            ].map(({ title, path }) => (
              <div key={title}>
                <Link href={path}>
                  <h2>{title}</h2>
                </Link>
              </div>
            ))}
          </div>
          <Link href="/" className="text-[28px] text-center tracking-wide font-[500] xl:text-[20px]">
            <h1>DIORITE</h1>
          </Link>
          <div className="flex gap-x-[22px] font-amiri text-[18px] font-thin xl:text-[14px] xl:gap-x-[16px] ">
            <Link href="/">Search</Link>
            {[
              { title: "Login", path: "/" },
              { title: "Whishlist", path: "/" },
              { title: "Bag(0)", path: "/" },
            ].map(({ title, path }) => (
              <div className="md:hidden" key={title}>
                <Link href={path}>
                  <h2>{title}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
