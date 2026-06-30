import React from 'react'

// Reusable styles for formatting
const H = ({ children }) => <h3 className="text-xl font-bold text-text-primary mt-6 mb-3">{children}</h3>
const P = ({ children }) => <p className="text-text-secondary mb-4 leading-relaxed">{children}</p>
const UL = ({ children }) => <ul className="list-disc list-outside pl-5 space-y-2 text-text-secondary">{children}</ul>
const SubH = ({ children }) => <h4 className="text-lg font-semibold text-text-primary mt-4 mb-2">{children}</h4>

const TermsContent = () => (
  <>
    <P><strong>Last Updated: January 1, 2024</strong></P>
    <P>These Terms of Service ("Terms") govern your use of the Aadyas Services website and services. By accessing or using our services, you agree to be bound by these Terms.</P>

    <H>1. Acceptance of Terms</H>
    <P>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</P>

    <H>2. Description of Service</H>
    <P>Aadyas Services provides professional support and consulting services to NGOs and unorganized sectors, including but not limited to organizational development, capacity building, technology solutions, and field operations support.</P>

    <H>3. User Responsibilities</H>
    <P>Users agree to:</P>
    <UL>
      <li>Provide accurate and complete information</li>
      <li>Use our services for lawful purposes only</li>
      <li>Respect intellectual property rights</li>
      <li>Not engage in harmful or disruptive activities</li>
      <li>Maintain confidentiality of any sensitive information</li>
    </UL>

    <H>4. Service Availability</H>
    <P>We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We reserve the right to suspend or modify services for maintenance, updates, or other operational reasons.</P>

    <H>5. Intellectual Property</H>
    <P>All content on this website, including text, graphics, logos, and software, is the property of Aadyas Services or its licensors and is protected by copyright and other intellectual property laws.</P>

    <H>6. Privacy and Data Protection</H>
    <P>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</P>

    <H>7. Service Terms and Conditions</H>
    <SubH>Consulting Services</SubH>
    <UL>
      <li>Services are provided based on agreed scope and timelines</li>
      <li>Payment terms as specified in individual service agreements</li>
      <li>Both parties maintain confidentiality of sensitive information</li>
    </UL>
    <SubH>Training Programs</SubH>
    <UL>
      <li>Participation requires commitment to full program duration</li>
      <li>Materials provided are for participant use only</li>
      <li>Certificates issued upon successful completion</li>
    </UL>

    <H>8. Limitation of Liability</H>
    <P>Aadyas Services shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service in question.</P>

    <H>9. Indemnification</H>
    <P>You agree to indemnify and hold harmless Aadyas Services from any claims, damages, or expenses arising from your use of our services or violation of these Terms.</P>

    <H>10. Termination</H>
    <P>We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.</P>

    <H>11. Governing Law</H>
    <P>These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Pune, Maharashtra, India.</P>

    <H>12. Changes to Terms</H>
    <P>We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website with a new "Last Updated" date.</P>

    <H>13. Force Majeure</H>
    <P>Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including natural disasters, government actions, or other unforeseeable events.</P>

    <H>14. Severability</H>
    <P>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.</P>

    <H>15. Contact Information</H>
    <P>For questions about these Terms of Service, please contact us:</P>
    <P>
      Aadyas Services<br />
      Email: legal@aadyasservices.in<br />
      Phone: +91-XXX-XXX-XXXX<br />
      Address: Kothrud, Pune, Maharashtra 411038, India
    </P>
  </>
)

export default TermsContent