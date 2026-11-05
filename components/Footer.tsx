export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            &copy; {currentYear} Carlos Alves. All rights reserved.
          </div>
          <div className="text-sm text-gray-600">
            MSc Data Science & AI | Goldsmiths, University of London
          </div>
        </div>
      </div>
    </footer>
  )
}
