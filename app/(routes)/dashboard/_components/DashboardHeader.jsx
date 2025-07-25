import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ThemeToggle from "@/components/ui/ThemeToggle";

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
          <ThemeToggle/>
        </div>
        <div>
            
            <UserButton afterSignOutUrl='/'/>
        </div>
       
    </div>
  )
}

export default DashboardHeader