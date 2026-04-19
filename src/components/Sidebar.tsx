import { LayoutDashboard, CheckSquare, Settings, Users } from "lucide-react";
import Link from "next/link";

export const SidebarContent = () => (
  <div className="flex flex-col h-full py-4 px-3 space-y-4 bg-slate-50 text-slate-900">
    <div className="px-3 py-2 font-bold text-xl tracking-tight">
      CollabFlow
    </div>
    <nav className="flex-1 space-y-1">
      <Link href="/" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-200 transition">
        <LayoutDashboard className="mr-3 h-5 w-5" />
        儀表板
      </Link>
      <Link href="/tasks" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-200 transition">
        <CheckSquare className="mr-3 h-5 w-5" />
        我的任務
      </Link>
      <Link href="/members" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-200 transition">
        <Users className="mr-3 h-5 w-5" />
        團隊成員
      </Link>
    </nav>
    <div className="pt-4 border-t px-3">
      <Link href="/settings" className="flex items-center text-sm font-medium hover:text-blue-600">
        <Settings className="mr-3 h-5 w-5" />
        設定
      </Link>
    </div>
  </div>
);