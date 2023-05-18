import React from 'react'
import DashboardHead from './common/DashboardHead'
import { Image } from 'react-bootstrap'
import AmpleLogo from '../assets/admin/images/ample-secure.png'
import { AiOutlineHome } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
export default function DashLayout() {
    return (
        <>
            <section className='layout_section'>
                <aside className='side_menu_bar'>
                    <div className='menu_bar_head'>
                        <Image src={AmpleLogo} fluid />
                    </div>
                    <div className='menu_bar_item'>
                        <ul>
                            {Array(20).fill("").map((e,k) => {
                                return <li className={k===0 ? 'active' : ''} key={k}>
                                    <Link to={'/dashboard/home'} className='item_bar'>
                                        <div className='item_icon'><AiOutlineHome /></div>
                                        <div className='item_text'>Home</div>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </aside>
                <div className='dashboard_pages'>
                    <DashboardHead />
                    <Outlet/>
                </div>
            </section>
        </>
    )
}
