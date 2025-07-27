// Update the import path if the file is located elsewhere, for example:
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8">
      {/* Section Title */}
      <div className="text-center mb-8 text-white text-base font-bold">
        <h3 className="heading">
          Work <span className="text-purple">Experience</span>
        </h3>
      </div>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        <HoverEffect items={Experience} />
      </div>
    </div>
  );
}

export const Experience = [
  {
    title: "Android App Developer (May 2025 - July 2025)",
    description:
      "at Acuity IT Solutions: Developed a real-time chat application using Spring Boot WebSocket and React Native, enabling seamless two-way messaging between users.",
  },
  {
    title: "Web Developer (February 2025 - March 2025)",
    description:
      "at TechnoML: Built web development projects and improved my technical skills.",
  },
];