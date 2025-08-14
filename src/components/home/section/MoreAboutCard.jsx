import { ChevronRight } from "lucide-react";
const MoreAboutCard = ({ item }) => {
  return (
    <div className="flex items-center justify-between text-lg font-medium py-4 border-b-4 cursor-pointer">
      <p>{item}</p>
      <ChevronRight strokeWidth={3} className="text-gray-400" />
    </div>
  );
};

export default MoreAboutCard;
