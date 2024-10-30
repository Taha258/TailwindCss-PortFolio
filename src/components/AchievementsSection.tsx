"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the AnimatedNumbers component
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

// List of achievements
const achievementsList = [
  {
    metric: "Projects",
    value: "13",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,00",
  },
  {
    metric: "Awards",
    value: "1",
  },
  {
    metric: "Years",
    value: "1",
  },
];

// AchievementsSection component
const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix ? achievement.prefix : null}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value.replace(/,/g, ""))} // Replace commas before parsing
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1), // Corrected 'tension'
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
