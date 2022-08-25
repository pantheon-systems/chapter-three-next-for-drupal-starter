import { PreviewAlert } from "@/components/preview-alert"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <PreviewAlert />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
