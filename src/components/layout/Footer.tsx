export const Footer = () => {
  return (
    <div className="bg-dark text-[#fff]">
      <div className="max-w-[1920px] mx-auto p-[70px_60px_50px] xl:p-[70px_50px_50px] lg:p-[60px_30px_40px] sm:p-[50px_30px]">
        <div className="text-[16px] flex px-[13px] gap-[30px] justify-between leading-[30px] xl:text-[14px] xl:gap-[40px] lg:grid lg:grid-cols-[360px_minmax(120px,_160px)_65px] lg:gap-y-[30px] md:grid-cols-1 md:grid-rows-auto md:gap-x-[0] md:px-0">
          {/* About */}
          <div className="xl:hidden lg:block md:row-start-5">
            <h3 className="font-thin opacity-80">About</h3>
            <h1 className="max-w-[430px] pt-[16px] font-normal lg:pt-[10px] opacity-90">
              Add modern silhouettes to everyday wear to accentuate fashion, express freedom, and feel comfortable. To everyday
              wear to accentuate fashion, express freedom, comfortable.
            </h1>
          </div>
          {/* Address */}
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 md:row-start-4 md:row-end-5 ">
            <h3 className="font-thin opacity-80">Address</h3>
            <h1 className="max-w-[320px] pt-[16px] xl:max-w-[273px] lg:max-w-[375px] lg:pt-[10px] opacity-90">
              Ulaanbaatar , Mongolia 3A 9723 BN in Shangrila about Diorite Team
            </h1>
          </div>
          {/* Contact us */}
          <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:pl-[5vw] md:pl-[0] md:row-start-2 md:col-start-1">
            <h3 className="font-thin opacity-80">Contact us</h3>
            <h1 className=" max-w-[180px] pt-[16px] lg:pt-[10px] opacity-90">976 90387283 diorite@99gmail.com</h1>
          </div>
          {/* Explore */}
          <div className="lg:pl-[5vw] md:row-start-1 md:pl-[0]">
            <h3 className="font-thin opacity-80">Explore</h3>
            <h1 className="pt-[16px] w-[92px] lg:pt-[10px] opacity-90">About us Contact us EN /MN</h1>
          </div>
          {/* Follow us */}
          <div className="md:row-start-3 md:col-start-1">
            <h3 className="font-thin opacity-80">Follow us</h3>
            <h1 className="pt-[16px] max-w-[100px] lg:pt-[10px] opacity-90">Instagram Facebook</h1>
          </div>
        </div>
        <div className="border-t-[0.3px] my-[32px] border-[#fff] lg:my-[40px] md:m-[40px_0_18px]" />
        <div className="flex justify-between text-[12px] font-thin sm:text-[10px]">
          <h3>Privacy policy & Term condition</h3>
          <h3>copy right @Meta Global ink</h3>
        </div>
      </div>
    </div>
  );
};
