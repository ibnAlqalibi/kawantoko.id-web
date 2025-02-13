import React from "react";
import styles, { layout } from "@/views/style";
import { problems, solutions } from "@/constants";

interface FeatureProps {
  icon: string;
  title: string;
  content: React.ReactNode;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: FeatureProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== problems.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <React.Fragment>
    <section id="problems" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Tantangan UMKM</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          UMKM menghadapi tantangan besar untuk menembus pasar digital, bukan
          hanya karena persaingan yang ketat, tetapi juga akibat minimnya
          dukungan teknis dan infrastruktur yang memadai. Banyak pelaku UMKM
          yang memiliki produk berkualitas tinggi, namun kesulitan memperluas
          jangkauan pemasaran mereka di dunia online. Mereka sering kali
          terjebak dalam pola penjualan konvensional yang terbatas pada
          pelanggan lokal, sementara pasar digital menawarkan peluang yang jauh
          lebih besar jika dimanfaatkan dengan baik.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {problems.map((problem, index) => (
          <FeatureCard key={problem.id} {...problem} index={index} />
        ))}
      </div>
    </section>
    <section id="solutions" className={layout.section}>
      <div className={`${layout.sectionImg} flex-col items-start`}>
        {solutions.map((solution, index) => (
          <FeatureCard key={solution.id} {...solution} index={index} />
        ))}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Solusi?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <i>
            Cukup Daftar lewat WhatsApp, Produk Anda Akan Muncul di E-Commerce
            Besar!
          </i>
        </p>
      </div>
    </section>
  </React.Fragment>
);

export default Business;
