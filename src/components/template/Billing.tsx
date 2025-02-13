import { bisnis } from "@/assets";
import styles, { layout } from "@/views/style";
import { howToUse } from "@/constants";

const Billing = () => (
  <section id="how" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bisnis}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Cara Kerja Kawan Toko</h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <ol className="list-decimal pl-5">
          {howToUse.map((item, index) => (
            <li
              key={index}
              className="font-poppins font-normal text-[18px] leading-[30.8px] flex items-start"
            >
              <span className="font-bold mr-2 text-[#06f6fe]">{index + 1}</span>
              <span className="text-dimWhite">{item.content}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6"></div>
    </div>
  </section>
);

export default Billing;
