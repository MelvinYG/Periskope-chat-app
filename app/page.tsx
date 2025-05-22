import LeftSideBar from '@/components/leftSideBar'
import React from 'react'

export default function Page() {
  return (
    <div className='flex w-[100%] h-screen flex-1 overflow-hidden relative'>
      <LeftSideBar/>
      <main className='w-[95%]'>
        <section className='w-[100%]'>Head</section>
        <section className='flex w-[100%]'>
          <div className='w-[95%] bg-gray-400'>main chat</div>
          <aside className='w-[5%] flex flex-col items-center'>right</aside>
        </section>
      </main>
    </div>
  )
}
