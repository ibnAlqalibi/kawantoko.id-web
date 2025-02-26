import styles from "@/views/style";
import { hero } from "@/assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white font-bold">500+ UMKM</span> sudah
            mendaftarkan diri!
          </p>
        </div> */}

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <i>
            UMKM Masih Stuck?
            <br className="sm:block hidden" />
            <span className="text-gradient">Kawan Toko</span> Hadirkan
            Solusinya!
          </i>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kawan Toko adalah solusi digital untuk membantu tenant UMKM
          meningkatkan penjualan mereka dengan mudah dan cepat. Kami percaya
          bahwa setiap produk UMKM layak untuk bersaing di pasar yang lebih
          luas.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={hero}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
