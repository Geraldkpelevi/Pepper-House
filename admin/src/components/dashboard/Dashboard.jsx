import Links from "../links/Links"
import AppRoutes from "../../routes/AppRoutes"
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
        <section className='link-section'>
            <Links />
        </section>
        <section className='components'>
            <AppRoutes />
        </section>
    </div>
  )
}

export default Dashboard