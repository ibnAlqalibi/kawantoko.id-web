import styles from "@/views/style";
import Button from "@/components/template/Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Mari Bergabung Bersama Kawan Toko dan Raih Kesuksesan Digital!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Jadilah bagian dari transformasi digital UMKM. Daftar sekarang melalui
        WhatsApp dan bawa produk Anda ke pasar yang lebih luas!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
