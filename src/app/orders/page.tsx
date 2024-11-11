import DefaultLayout from '@/components/Layouts/DefaultLayout'
import OrdersCardList from '@/components/Tables/OrderHistory'

import UsersSubPageHeader from '@/components/UsersSubPageHeader'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
    <UsersSubPageHeader/>
    <OrdersCardList/>
    </DefaultLayout>
  )
}

export default page