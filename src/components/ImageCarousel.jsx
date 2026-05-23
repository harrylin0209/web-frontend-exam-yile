import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ImageCarousel({
  images,
  autoPlayInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);

  const total = images.length;
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // autoplay
  useEffect(() => {
    if (dragging) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, dragging]);

  return (
    <div className="w-full mb-[18px]">
      {/* viewport */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-2"
          animate={{
            x: `calc(-${current} * (37% + 16px))`,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => setDragging(true)}
          onDragEnd={(_, info) => {
            setDragging(false);

            const threshold = 60;

            if (info.offset.x < -threshold) {
              nextSlide();
            }

            if (info.offset.x > threshold) {
              setCurrent((prev) => (prev - 1 + total) % total);
            }
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-[150px] min-w-[250px] overflow-hidden"
            >
              <img
                src={image}
                alt={`slide-${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* indicators */}
      <div className="mt-2.5 flex items-center justify-center gap-2">
        {images.map((_, index) => {
          const active = index === current;

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                active
                  ? "h-1.5 w-8 rounded-full bg-orange-700"
                  : "h-1.5 w-1.5 rounded-full bg-gray-300"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}