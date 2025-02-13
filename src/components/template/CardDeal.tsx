import { cari } from "@/assets";
import styles, { layout } from "@/views/style";
import { valuePropositions } from "@/constants";

// import Button from "@/components/ui/Button";

const CardDeal = () => (
  <section id="why" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Mengapa Tenant Harus Memilih Kawan Toko?
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <ol className="list-decimal pl-5">
          {valuePropositions.map((item, index) => (
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
      <img src={cari} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
