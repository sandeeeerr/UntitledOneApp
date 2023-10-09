import '@/styles/app.scss'
import Sidebar from '@module/SideBar/Sidebar';


export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className='flex flex-wrap my-10'>      
      <Sidebar />
      <div className='w-full lg:w-3/4 '>
        {children}
      </div>
    </div>
  )
}
