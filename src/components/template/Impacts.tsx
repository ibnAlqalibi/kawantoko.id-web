import { impact } from "@/assets";
import styles, { layout } from "@/views/style";
import { impact as impactList } from "@/constants";

// import Button from "@/components/ui/Button";

const impacts = () => (
  <section id="impact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Memberdayakan UMKM, Meningkatkan Penjualan
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <ol className="list-decimal pl-5">
          {impactList.map((item, index) => (
            <li
              key={index}
              className="font-poppins font-normal text-[18px] leading-[30.8px] flex items-start"
            >
              <span className="font-bold mr-2 text-[#06f6fe]">{index + 1}</span>
              <span className="text-dimWhite">{item.value}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* <Button className={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={impact} alt="impact" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default impacts;
