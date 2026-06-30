import React from 'react'

// Reusable styles for formatting
const H = ({ children }) => <h3 className="text-xl font-bold text-text-primary mt-6 mb-3">{children}</h3>
const P = ({ children }) => <p className="text-text-secondary mb-4 leading-relaxed">{children}</p>
const UL = ({ children }) => <ul className="list-disc list-outside pl-5 space-y-2 text-text-secondary">{children}</ul>
const SubH = ({ children }) => <h4 className="text-lg font-semibold text-text-primary mt-4 mb-2">{children}</h4>

const PrivacyPolicyContent = () => (
  <>
    <P><strong>Last Updated: January 1, 2024</strong></P>
    <P>This Privacy Policy describes how Aadyas Services ("we," "our," or "us") collects, uses, and protects your personal information when you visit our website or use our services.</P>

    <H>1. Information We Collect</H>
    <SubH>Personal Information</SubH>
    <P>We may collect personal information that you voluntarily provide to us, including:</P>
    <UL>
      <li>Name and contact information (email, phone, address)</li>
      <li>Organization details and professional information</li>
      <li>Communication preferences</li>
      <li>Information provided in forms, surveys, or correspondence</li>
    </UL>
    <SubH>Automatically Collected Information</SubH>
    <P>When you visit our website, we may automatically collect:</P>
    <UL>
      <li>IP address and browser information</li>
      <li>Pages visited and time spent on our site</li>
      <li>Referring website information</li>
      <li>Device and operating system information</li>
    </UL>

    <H>2. How We Use Your Information</H>
    <P>We use your information to:</P>
    <UL>
      <li>Provide and improve our services</li>
      <li>Respond to your inquiries and requests</li>
      <li>Send you updates and communications (with your consent)</li>
      <li>Analyze website usage and improve user experience</li>
      <li>Comply with legal obligations</li>
    </UL>

    <H>3. Information Sharing</H>
    <P>We do not sell, trade, or otherwise transfer your personal information to third parties except:</P>
    <UL>
      <li>With your explicit consent</li>
      <li>To trusted service providers who assist in our operations</li>
      <li>When required by law or to protect our rights</li>
      <li>In connection with a business transfer or merger</li>
    </UL>

    <H>4. Data Security</H>
    <P>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</P>

    <H>5. Cookies and Tracking</H>
    <P>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.</P>

    <H>6. Third-Party Links</H>
    <P>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.</P>

    <H>7. Your Rights</H>
    <P>You have the right to:</P>
    <UL>
      <li>Access and update your personal information</li>
      <li>Request deletion of your data</li>
      <li>Opt-out of communications</li>
      <li>Restrict or object to data processing</li>
    </UL>

    <H>8. Data Retention</H>
    <P>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</P>

    <H>9. Changes to This Policy</H>
    <P>We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on our website with an updated "Last Updated" date.</P>

    <H>10. Contact Us</H>
    <P>If you have questions about this Privacy Policy or our data practices, please contact us:</P>
    <P>
      Aadyas Services<br />
      Email: privacy@aadyasservices.in<br />
      Phone: +91-XXX-XXX-XXXX<br />
      Address: Kothrud, Pune, Maharashtra 411038, India
    </P>
  </>
)

export default PrivacyPolicyContent