import { useRouter } from "next/router";
import json from "@/utils/index.json";

const ProductsDetail = () => {
  const router = useRouter();
  const productsId = router.query.productsId;
  const data = json.filter((el) => el.id === productsId);
  return (
    <div className="pt-[140px]">
      <section className="max-w-[1920px] m-auto grid grid-cols-3 gap-[24px] relative ">
        <div className="max-w-[280px] sticky top-0 right-0 ml-[35%]">
          <h2 className="text-[24px] leading-[42px] mb-[20px]">Materials And Care</h2>
          <h2 className="text-[20px] leading-[35px] mb-[5x]">Materials</h2>
          <h3 className="text-[16px] leading-[18px] pb-[16px]">
            We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standars
            for our garments. To assess compliance, we have developed a programme of audits and continuous improvement plans.
          </h3>
          <h2 className="text-[20px]">Outer Shell</h2>
          <h3 className="text-[16px]">100% leather</h3>
        </div>
        <div className="gap-[24px] flex flex-col items-center">
          {data[0]?.detail.detailImage.map((el) => {
            return (
              <div key={el.src} className="max-w-[584px] h-[848px]">
                <img className="w-full h-full object-cover" src={el.src} alt="" />
              </div>
            );
          })}
        </div>
        <div className="max-w-[280px] ">
          <h2>Basic Leather coat</h2>
          <h3>
            Long coat made of a leather material. Lapel collar and long sleeves with adlustable tabs and buttons. Tie belt in same
            fabric.
          </h3>
        </div>
      </section>
      ProductsDetail {productsId}
    </div>
  );
};

export default ProductsDetail;
