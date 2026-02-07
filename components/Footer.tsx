'use client'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  
  return (
    <footer className='p-5'>
      <span className="block text-sm text-center text-muted-foreground">&copy; {year} Hecho con amor para mi chitiritito.</span>
    </footer>
  )
}

export default Footer
