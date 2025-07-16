import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <NewsletterSection />
      <Footer />
    </main>
  )
}
