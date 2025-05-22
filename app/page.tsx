import React from 'react'

export default function Page() {
  return (
    <div className='flex w-[100%] h-screen'>
      <aside className='w-[5%]'>left</aside>
      <main>
        <section>Head</section>
        <section>
          <div>main chat</div>
          <aside>right</aside>
        </section>
      </main>
    </div>
  )
}
