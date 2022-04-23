/* eslint-disable react-hooks/exhaustive-deps */
import "./PurpleDude.css";
import { useEffect } from "react";
import { gsap } from "gsap";

const PurpleDude = () => {
  const randomX = random(10, 30);
  const randomY = random(20, 40);
  const randomDelay = random(0, 1);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(8, 12);

  function rotate(target, direction) {
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      delay: randomDelay(),
      ease: "Sine.easeInOut",
      onComplete: rotate,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: "Sine.easeInOut",
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: "Sine.easeInOut",
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }

  useEffect(() => {
    moveX(".purple-dude", 1);
    moveY(".purple-dude", -1);
    rotate(".purple-dude", 1);

    return () => {
      moveX(".purple-dude", 1);
      moveY(".purple-dude", -1);
      rotate(".purple-dude", 1);
    };
  }, []);

  return (
    <>
      <a
        href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
        target="_blank"
        rel="noopener noreferrer"
        className="purple__dude--link"
      >
        <img className="purple-dude" src="/images/dude-4.png" alt="" />
      </a>
    </>
  );
};

export default PurpleDude;
