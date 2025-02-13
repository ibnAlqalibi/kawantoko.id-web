import { feedback } from "@/constants";
import styles from "@/views/style";
import FeedbackCard from "@/components/template/FeedbackCard";

const Testimonials = () => (
  <section
    id="testimony"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Testimoni <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Temukan semua yang Anda butuhkan untuk membangun dan mengelola website
          yang modern serta memperluas bisnis Anda di seluruh dunia.
        </p>
      </div>
    </div>

    <div className="flex overflow-x-auto w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <div key={card.id} className="flex-shrink-0 sm:w-1/3 w-full p-4">
          <FeedbackCard {...card} />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
