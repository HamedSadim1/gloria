interface NavUserMenuProps {
  userName: string | null;
  onLogout: () => void;
}

const NavUserMenu = ({ userName, onLogout }: NavUserMenuProps) => {
  return (
    <div className="flex items-center gap-2 border-l border-gray-700 pl-4">
      {userName && <span className="text-xs text-gray-400">{userName}</span>}{" "}
      <button
        onClick={onLogout}
        className="cursor-pointer rounded-lg border border-gray-700 bg-transparent px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 focus-visible:ring-2 focus-visible:ring-neon-cyan"
      >
        Logout
      </button>
    </div>
  );
};

export default NavUserMenu;
