import { InView } from "react-intersection-observer";
import { TitleDescription } from "@/components/TitleDescription";
import { Tween } from "react-gsap";

const HomePage = () => {
  const innerWidth = window.innerWidth;
  return (
    <>
      <div className="pt-[210px] xl:pt-[136px] lg:pt-[110px] md:pt-[130px]">
        {/* promo  */}
        <section>
          <InView threshold={0} trackVisibility delay={1000} triggerOnce>
            {({ inView, ref }) => (
              <>
                <div
                  ref={ref}
                  className={`duration-[1s] delay-[0.6s] ${inView ? "translate-y-0" : "translate-y-[-100%]"} ${inView ? "opacity-100" : "opacity-0"}`}
                >
                  <TitleDescription
                    width="w-[920px] sm:w-[345px] lg:w-[510px] xl:w-[555px]"
                    title="Smart Casual And Minimal"
                    colorDec="text-description"
                    colorTit="text-title"
                    description={
                      innerWidth <= 500
                        ? "The DIORITE is a blazer coat with nipped waist detail at the back, marrying classic tailoring with a feminine silhouette."
                        : "The DIORITE is a blazer coat with nipped waist detail at the back, marrying classic tailoring with a feminine silhouette. Made in a mid-weight wool-blend, cashmere , leather it is marrying classic tailoring with a feminine both refined and tabletlg as a all-weather layer."
                    }
                  />
                </div>
                <Tween
                  to={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    height: "98vh",
                    scrollTrigger: {
                      trigger: "#full-img",
                      start: "0 140px",
                      end: "31.5% 25%",
                      scrub: 1,
                    },
                  }}
                >
                  <div id="full-img" className="px-[60px] h-[80vh] pt-[70px] xl:px-[30px] lg:pt-[40px] md:pt-[30px]">
                    <img
                      style={{
                        scale: inView ? "1" : "0.1",
                        transform: inView ? "translateY(0)" : "translateY(-100vh)",
                      }}
                      className="rounded-xl duration-[1.5s] object-cover object-[50%_25%] h-full xl:h-[600px] lg:h-[400px] w-full"
                      src="/static/_0000893.jpg"
                      alt="Promo picture"
                    />
                  </div>
                </Tween>
              </>
            )}
          </InView>
        </section>
        {/* type */}
        <section>
          <div className="max-w-[1920px] mx-auto ">
            <div className="py-[160px] xl:py-[130px] sm:py-[70px]">
              <TitleDescription
                width="w-[560px] sm:w-[370px] lg:w-[465px] xl:w-[490px]"
                colorDec="text-description"
                colorTit="text-title"
                title="Daily routine with DIORITE"
                description="Add modern silhouettes to everyday wear to accentuate fashion, express freedom, and feel comfortable..."
              />
              <div className="flex justify-center p-[65px_60px_0] gap-x-[24px] xl:p-[50px_30px_0] xl:gap-[16px] xl:grid-cols-[minmax(170px,_270px)_minmax(265px,_366px)_minmax(170px,_270px)] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:p-[40px_30px_0] sm:grid-rows-3 sm:grid-cols-1 sm:gap-[40px] sm:p-[50px_30px_0]">
                {[
                  { src: "/static/_0001013.jpg", type: "Cashmere", feature: "DIORITE is a brand that soft and warm." },
                  {
                    src: "/static/_0000705.jpg",
                    type: "Leather",
                    feature: "DIORITE is a brand that limited leather coats. ",
                  },
                  {
                    src: "/static/_0000897.jpg",
                    type: "Tailored Clothing",
                    feature: "DIORITE is a brand that soft and warm.",
                  },
                ].map(({ src, type, feature }, i) => (
                  <div
                    className={`relative max-h-[800px] xl:max-w-[100%] lg:max-w-[100%] xl:max-h-[480px]${
                      i === 1
                        ? " min-w-[480px] max-w-[585px] xl:min-w-[300px] xl:max-w-[370px] lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 sm:col-start-auto sm:col-end-auto sm:row-start-auto sm:row-end-auto"
                        : " max-w-[434px] mt-[105px] xl:max-w-[270px] lg:mt-0"
                    }`}
                    key={i}
                  >
                    <div className="w-full h-full flex">
                      <img
                        className="rounded-xl w-full h-[800px] object-cover xl:h-[480px] lg:object-[50%_10%] lg:h-[470px]"
                        src={src}
                        alt="type picture"
                      />
                    </div>
                    <div className="type-feature-text">
                      <h2>{type}</h2>
                      <h3>{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* feature */}
        <section className=" overflow-hidden relative bg-dark">
          <div className="max-w-[1920px] mx-auto px-[60px] h-[155vh]">
            <div className={`w-full flex relative`}>
              <div id="sticky" className="w-[50%] pt-[150px] sticky top-0 ">
                <h2 className="text-[28px] h-[100px] leading-[27px] duration-[.1s] text-[#fff]">
                  No Harm to
                  <p className="text-[64px] pt-[12px] text-[#B58765] leading-[62px] font-semibold">The Earth</p>
                </h2>
                <h3
                  className={`max-w-[445px] pt-[16px] duration-[.3s] opacity-90  tracking-[-0.012em] text-[18px] leading-[22px] font-thin text-[#A0A0A0]`}
                >
                  DIORITE is a brand that promotes smart consumption and ecological balance. Minimalism and simplicity are reflected in our products.
                  Control the selection of materials at a high level and calculate the process from how it is produced to how it is absorbed into
                  nature Conduct production with less waste and introduce the process of recycling waste into our operations Creating quality by
                  combining standards and technology.
                </h3>
              </div>
              <div className="w-[50%] flex gap-x-[24px] overflow-hidden">
                <div id="first" className="max-w-[435px] flex flex-col gap-y-[24px] mt-[-654px] ">
                  {["/static/_0000327.jpg", "/static/_0000382.jpg", "/static/_0000291.jpg"].map((el, i) => (
                    <div className="w-full h-[630px]" key={i}>
                      <img className="object-cover w-[435px] h-full rounded-xl" src={el} alt="" />
                    </div>
                  ))}
                </div>

                <div id="second" className="max-w-[435px] flex flex-col gap-y-[24px] mt-[-300px]">
                  {["/static/_0000803.jpg", "/static/_0000272.jpg", "/static/_0000346.jpg"].map((el, i) => (
                    <div className="w-full h-[630px]" key={i}>
                      <img className="object-cover w-[435px] h-full rounded-xl" src={el} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about */}
        <section className="max-w-[1920px] mx-auto">
          <div className="py-[160px] px-[60px] flex justify-center items-center xl:px-[30px] xl:py-[130px] sm:py-[70px]">
            <div className="max-w-[1496px] w-full h-[100vh] max-h-[847px] relative xl:max-h-[538px] lg:max-h-[387px]">
              <div className="flex h-full">
                <img className="object-cover object-center w-full rounded-xl xl:object-[50%_40%]" src="/static/_0000126.jpg" alt="" />
              </div>
              <div className="absolute w-full top-1/2 -translate-y-1/2">
                <TitleDescription
                  width="w-[910px] sm:w-[300px] lg:w-[465px] xl:w-[675px]"
                  title="Our Story"
                  colorTit="text-[#f2f2f2]"
                  colorDec="text-[#fff]"
                  description={
                    innerWidth <= 500
                      ? "DIORITE brand was founded in 2020 by E. Battuya and B. Enkhbileg. The meaning of the name diorite is the name of a beautiful stone with a uniq..."
                      : "DIORITE brand was founded in 2020 by E. Battuya and B. Enkhbileg. The meaning of the name diorite is the name of a beautiful stone with a unique formation of great energy, found at the very bottom of the earth, usually in the lower depths of volcanoes.Add modern silhouettes to everyday wear to accentuate fashion, express freedom, and feel comfortable..."
                  }
                />
              </div>
            </div>
          </div>
        </section>
        {/* promo  */}
        <section className="max-w-[1920px] mx-auto">
          <TitleDescription
            title="Why DIORITE"
            description="Add modern silhouettes to everyday wear to accentuate fashion, express freedom, and feel comfortable..."
            width="max-w-[550px] xl:max-w-[625px] lg:max-w-[400px] sm:max-w-[360px]"
            colorTit="text-title"
            colorDec="text-description"
          />
          <div className="flex w-full justify-center gap-x-[24px] p-[10px_60px_160px] xl:grid xl:grid-cols-[minmax(360px,_560px)_minmax(166px,_366px)] xl:grid-rows-2 sm:grid-cols-1 xl:gap-[16px] xl:p-[65px_30px_130px] sm:grid-rows-[minmax(300px,_500px)] sm:gap-[24px] sm:p-[65px_30px_100px]">
            {[
              {
                src: "/static/_0000092.jpg",
                type: "Limited edition",
                feature: "DIORITE is a brand that promotes smart consumption and ecological balance.",
              },
              {
                src: "/static/_0000670.jpg",
                type: "Cashmere thread",
                feature: "DIORITE is a brand that promotes smart consumption and ecological balance.",
              },
              {
                src: "/static/_0000255.jpg",
                type: "Pabrics",
                feature: "DIORITE is a brand that promotes smart consumption and ecological balance.",
              },
            ].map(({ src, type, feature }, i) => (
              <div
                className={`relative max-h-[780px] xl:max-w-[100%] ${
                  i === 1
                    ? " w-1/2 xl:col-start-1 xl:row-start-1 xl:row-end-3 xl:max-w-full xl:w-full xl:max-h-[685px] sm:col-start-auto sm:row-start-auto sm:row-end-auto  sm:max-h-[500px]"
                    : ` w-1/4 mt-[-60px] xl:w-[100%] xl:mt-0 xl:max-w-[366px] xl:max-h-[332px] sm:max-w-none sm:max-h-[500px] h-[auto] ${
                        i === 2 && " xl:col-start-2 xl:row-start-1 sm:col-start-auto sm:row-start-auto sm:max-h-[500px] sm:h-[500px]"
                      }`
                }`}
                key={i}
              >
                <div className="w-full h-full flex">
                  <img className="rounded-xl w-full h-full object-cover " src={src} alt="type picture" />
                </div>
                <div className="type-feature-text">
                  <h2>{type}</h2>
                  <h3>{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;

// noise img https://grainy-gradients.vercel.app/noise.svg
