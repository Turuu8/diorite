import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ReactNode, useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [preloader, setPreload] = useState<boolean>(true);
  const [timer, setTimer] = useState(1);

  const id = useRef<null | number>(null);
  const clear = () => {
    if (id.current) {
      window.clearInterval(id.current);
      id.current = null;
    }
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1200);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
      setPreload(false);
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <InView threshold={0}>
          {({ ref, inView }) => (
            <div className="w-full h-[100vh] relative">
              <style jsx global>{`
                body {
                  background: #0d0e13;
                }
              `}</style>
              <div className="absolute inset-0 m-auto h-[72px] overflow-hidden items-center">
                <h1
                  ref={ref}
                  className={`text-[64px] text-[#fff] justify-center leading-[72px] flex items-center duration-1000  ${
                    inView ? "translate-y-0" : "translate-y-[100%]"
                  }`}
                >
                  DIORITE
                </h1>
              </div>
            </div>
          )}
        </InView>
      ) : (
        <>
          <Navbar />
          <main>{children}</main>

          <Footer />
        </>
      )}
    </>
  );
};
