"use client"; // 關鍵：聲明這是客戶端組件

import { Menu } from "lucide-react";
import { SidebarContent } from "@/components/Sidebar";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="md:hidden flex items-center justify-between p-4 border-b bg-white">
      <span className="font-bold">CollabFlow</span>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
            <SheetHeader className="p-4 border-b">
                <SheetTitle>導覽選單</SheetTitle>
            </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </header>
  );
}