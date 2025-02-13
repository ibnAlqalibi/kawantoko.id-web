import { tenants } from "@/assets";
import styles, { layout } from "@/views/style";
import { tenantType } from "@/constants";

const Tenants = () => (
  <section id="clients" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={tenants}
        alt="tenants"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Kami menargetkan 535 tenant UMKM di berbagai sektor, seperti:
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <ol className="list-decimal pl-5">
          {tenantType.map((item, index) => (
            <li
              key={index}
              className="font-poppins font-normal text-[18px] leading-[30.8px] flex items-start"
            >
              <span className="font-bold mr-2 text-[#06f6fe]">{index + 1}</span>
              <span className="text-dimWhite">{item.type}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6"></div>
    </div>
  </section>
);

export default Tenants;
