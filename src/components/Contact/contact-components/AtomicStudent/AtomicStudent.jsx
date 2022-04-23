/* eslint-disable react-hooks/exhaustive-deps */
import "./AtomicStudent.css";
import { useEffect } from "react";
import { gsap } from "gsap";

const AtomicStudent = () => {
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
    moveX(".atomic-student", 1);
    moveY(".atomic-student", -1);
    rotate(".atomic-student", 1);

    return () => {
      moveX(".atomic-student", 1);
      moveY(".atomic-student", -1);
      rotate(".atomic-student", 1);
    };
  }, []);

  return (
    <>
      <a 
      href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
      target="_blank"
      className="atomic-student--link"
      rel="noopener noreferrer"

      >
        <img className="atomic-student" src="/images/atomic.png" alt="" />
      </a>
    </>
  );
};

export default AtomicStudent;
