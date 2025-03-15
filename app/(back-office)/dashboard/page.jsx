import React from 'react'
import Headings from '@/components/backoffice/Headings'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import CustomDataTable from '@/components/backoffice/CustomDataTable'

export default function Dashboard() {
  return (
    <div>
      <Headings title="Dashboard Overview"/>
      {/*Large Cards*/}
      <LargeCards/>
      {/*Small Cards*/}
      <SmallCards/>
      {/*Charts*/}
      <DashboardCharts/>
      {/*recent Orders*/}
      <CustomDataTable/>
    </div>
  )
}
