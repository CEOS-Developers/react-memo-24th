import dotDaily from "../assets/icons/dot-daily.svg";
import dotWork from "../assets/icons/dot-work.svg";
import dotOthers from "../assets/icons/dot-others.svg";

export const TAGS = ["daily", "work", "others"];

// Tailwind는 `bg-${tag}`처럼 조합된 클래스를 빌드 때 찾지 못하므로 전체 클래스명을 그대로 적어둔다
export const TAG_STYLES = {
  daily: {
    label: "Daily",
    dot: dotDaily,
    bg: "bg-blue-03",
    text: "text-blue-04",
    footer: "font-semibold text-blue-01",
  },
  work: {
    label: "Work",
    dot: dotWork,
    bg: "bg-blue-06",
    text: "text-blue-06",
    footer: "font-normal text-white-00",
  },
  others: {
    label: "Others",
    dot: dotOthers,
    bg: "bg-gray-02",
    text: "text-gray-03",
    footer: "font-normal text-white-00",
  },
};
