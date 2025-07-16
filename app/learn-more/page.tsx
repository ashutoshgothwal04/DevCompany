export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Learn More About Real Trust</h1>
          <p className="text-lg text-gray-700 mb-8">Discover how our expert team can help you unlock the full potential of your projects and properties with tailored solutions and dedicated support.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comprehensive project management from start to finish</li>
              <li>Expert consultation tailored to your unique needs</li>
              <li>Property evaluation and strategic planning</li>
              <li>Ongoing support and collaboration throughout the project lifecycle</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Experienced professionals with a proven track record</li>
              <li>Personalized approach to meet your specific goals</li>
              <li>Transparent communication and regular updates</li>
              <li>Commitment to quality and client satisfaction</li>
            </ul>
          </div>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-700 mb-6 text-center">Have questions or want to discuss your project? Reach out to us and we&apos;ll be happy to help.</p>
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
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}