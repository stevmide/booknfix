import React from 'react'
import Layout from "@/components/Frontend/layout"
import Cleaner from '@/components/Frontend/cleaner'

function cleanForm() {
  return (
    <Layout>
    <div className="mx-auto max-w-screen-xl">
      <Cleaner />
    </div>
  </Layout>
  )
}

export default cleanForm