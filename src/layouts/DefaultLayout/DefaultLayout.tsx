import { logger } from "@/lib/logger"
import { Header } from "@/shared/components/common/Header"
import { Fragment, ReactNode } from "react"

type DefaultLayoutProps = {
    children: ReactNode
  }

  const log = logger.child({ module: 'layouts/DefaultLayout' })
export const DefaultLayout = async({children}:DefaultLayoutProps) => {
    return(<Fragment><Header/>{<main>{children}</main>}</Fragment>)
}