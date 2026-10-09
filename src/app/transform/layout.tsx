import ThemeToggle from '@/components/ui/ThemeToggle'

export default function TransformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <ThemeToggle />
      </div>
      {children}
    </>
  )
}
