'use client';
import ContactAnimation from "@/assets/contact-animation.json";
import Lottie from "react-lottie";
export const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ContactAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <Lottie options={defaultOptions} height={400} width={400} />
  )
}
