import { MessageSquare, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#00A3FF] text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold flex items-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-[#00A3FF] rounded-full" />
        </div>
        <span className="text-white">Grad</span>
        <span className="text-black">Hub</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <MessageSquare size={20} className="text-[#00A3FF]" />
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <Bell size={20} className="text-[#00A3FF]" />
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <User size={20} className="text-[#00A3FF]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
