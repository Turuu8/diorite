export const TitleDescription = ({
  width,
  title,
  description,
  colorDec,
  colorTit,
}: {
  width: string;
  title: string;
  description: string;
  colorDec: string;
  colorTit: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`${colorTit} text-[64px] leading-[70px] font-amiri text-center font-thin xl:text-[42px] md:text-[28px] md:leading-[50px]`}
      >
        {title}
      </h1>
      <p
        className={`${width} ${colorDec} text-center font-roboto leading-[22px] font-thin text-[18px] pt-[16px] opacity-80 xl:text-[16px] xl:pt-[0] lg:text-[14px] lg:leading-[20px] `}
      >
        {description}
      </p>
    </div>
  );
};
