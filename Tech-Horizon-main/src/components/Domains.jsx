import { benefits } from "../constants2";
import Section from "./Section";
import Arrow from "../assets2/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets2/svg/ClipPath";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container mx-auto relative z-2 px-4 sm:px-6 lg:px-8" style={{ display: "contents" }}>
        {/* Title Section */}
        <motion.div
          className="text-center relative mb-8 sm:mb-16"
          variants={textVariant()}
        >
          <h2 className="relative font-bold text-[30px] sm:text-[60px] tracking-wide flex justify-center items-center">
          Timeline{" "}
            <span className="gradient-text-purple ml-2">
            Highlights
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-base sm:text-lg font-medium text-gray-400">
            Where Idea Meets Innovation!
          </p>

          {/* Animated Horizontal Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="mt-4 mx-auto h-[2px] sm:h-[4px] bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900"
            style={{ maxWidth: "200px" }}
          />
        </motion.div>

        {/* Benefits Cards */}
        <div
          className="flex flex-wrap gap-6 sm:gap-10 mb-6 sm:mb-10 justify-center items-center"
        >
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[90%] sm:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[18rem] sm:min-h-[22rem] p-[1.2rem] sm:p-[2.4rem] pointer-events-none text-center">
                <h5 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-5">{item.title}</h5>
                <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto justify-center">
                  <img
                    src={item.iconUrl}
                    width={36}
                    height={36}
                    alt={item.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                  />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
