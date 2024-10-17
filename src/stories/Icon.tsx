import * as icons from "../assets/icons";

export type IconType = keyof typeof icons;

interface IconProps {
  name: IconType;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const SVGIcon = icons[name];
  if (!SVGIcon) {
    return null;
  }
  return <SVGIcon className={className} />;
};

export default Icon;
