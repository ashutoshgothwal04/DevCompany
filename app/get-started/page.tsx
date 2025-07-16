export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Get Started with Real Trust</h1>
          <p className="text-lg text-gray-700 mb-6">Begin your journey to a successful project with our expert team. Follow these simple steps to get started and unlock the full potential of your property or business.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
              <span className="text-2xl font-bold text-blue-700">1</span>
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Sign Up or Contact Us</h3>
            <p className="text-gray-600 text-sm">Create an account or reach out to our team to discuss your needs and goals.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
              <span className="text-2xl font-bold text-blue-700">2</span>
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Share Your Requirements</h3>
            <p className="text-gray-600 text-sm">Tell us about your project, property, or business so we can tailor our services for you.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
              <span className="text-2xl font-bold text-blue-700">3</span>
            </div>
            <h3 className="font-semibold text-blue-700 mb-2">Kick Off & Collaborate</h3>
            <p className="text-gray-600 text-sm">Work closely with our experts as we bring your vision to life, step by step.</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Request a Free Consultation</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={3} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition">Send Request</button>
          </form>
        </div>
      </section>
    </main>
  )
}