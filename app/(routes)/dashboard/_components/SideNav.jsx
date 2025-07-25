import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  TrendingUp,
  TrendingDownIcon,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    // {
    //   id: 2,
    //   name: "Investments",
    //   icon: TrendingUp,
    //   path: "/dashboard/investments",
    // },
    // {
    //   id: 2,
    //   name: "Debts",
    //   icon: TrendingDownIcon,
    //   path: "/dashboard/debts",
    // },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="h-screen p-5 border shadow-sm">
      {/* <Image src={'/logo.svg'}
        alt='logo'
        width={160}
        height={100}
        /> */}
      <div className="flex flex-row items-center">
        <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviUIILvO_4vw2KxrEa0YPEXCgI0HUrunK3g&s"} alt="logo" width={50} height={35} />
        <span className="text-base font-bold md:text-2xl text-gray-900 dark:text-white">Extrack</span>
      </div>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    p-4 cursor-pointer rounded-full
                    hover:text-primary hover:bg-blue-100
                    ${path == menu.path && "text-primary bg-blue-100 dark:bg-gray-700 shadow-2xl shadow-blue-500/20"}
                    `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div
        className="fixed bottom-10 p-5 flex gap-2
            items-center shadow-2xl shadow-blue-500/20"
      >
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav;
