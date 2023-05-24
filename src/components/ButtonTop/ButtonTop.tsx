import { useEffect, useState } from "react";
import { BtnIcon, BtnToTop } from "./styles";
import { ArrowUpIcon } from "assets";

export const ButtonTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <BtnToTop>
      {" "}
      {showTopBtn && (
        <BtnIcon onClick={goToTop}>
          <ArrowUpIcon />
        </BtnIcon>
      )}
    </BtnToTop>
  );
};
