'use client';
type Props = { 
  disabled?: boolean; 
  name: string; 
  href: string;
  icon: string;
};

const SidebarMenuItem = ({ disabled, name, href, icon }: Props) => (
  <li>

    <a href={`#${disabled ? "" : href}`} className={`${href} ${disabled ? "opacity-30 cursor-default" : "display"} relative flex flex-row items-center h-10 focus:outline-none text-gray-300 hover:text-gray-300`}>
      <span className="inline-flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
        </svg>
      </span>
      <span className="ml-2 tracking-wide truncate color">{name}</span>
      
    </a>
  </li>
);

export default SidebarMenuItem;