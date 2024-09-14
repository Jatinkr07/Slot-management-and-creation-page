import { Home, Users, Calendar, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow-md p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-[#00A3FF] pt-2"
            >
              <Home className="mr-2" size={20} />
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-[#00A3FF] pt-2"
            >
              <Users className="mr-2" size={20} />
              Applicants
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-[#00A3FF] pt-2"
            >
              <Calendar className="mr-2" size={20} />
              Calendar
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-4 left-4">
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-[#00A3FF]"
        >
          <HelpCircle className="mr-2" size={20} />
          Help
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
