
import Lottie from "lottie-react";
import animationData from "@/assets/contact-animation.json";

const LottieAnimation = () => {
  return <Lottie animationData={animationData} loop={true} style={{ height: 400, width: 400 }} />;
};

export default LottieAnimation;