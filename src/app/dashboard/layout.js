
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import React from 'react'

export default function Layout({ children }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}
