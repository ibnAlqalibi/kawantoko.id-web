import React from "react";

interface ButtonProps {
  className?: string;
}

const Button = ({ className }: ButtonProps) => {
  const handleClick = () => {
    const phoneNumber = "+6289519666644";
    const message = "Hallo, Saya ingin tahu lebih lanjut mengenai DodolIt";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${
          className ?? ""
        }`}
        onClick={handleClick}
      >
        Hubungi Kami
      </button>
    </React.Fragment>
  );
};

export default Button;
