import Link from 'next/link'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Dean & Co Cleaning Leeds"
        description="How Dean & Co Cleaning Services Ltd collects, uses and protects personal data, and the rights you have under UK data protection law."
        path="/privacy-policy"
      />

      <PageHero current="Privacy Policy" eyebrow="Legal" title="Privacy Policy" />

      <section className="section">
        <div className="wrap narrow prose">
          <p><strong>Version 1.1. Effective 5 November 2026.</strong></p>
          <h2>1. Introduction</h2>
          <p>Dean &amp; Co Cleaning Services Ltd ("Dean &amp; Co", "we", "us", "our") is committed to protecting the personal data we hold. We provide commercial cleaning services, and reactive specialist cleaning through our Emergency Cleaning Yorkshire division.</p>
          <p>This policy explains what personal data we collect, why we collect it, the lawful basis for using it, who we share it with, how long we keep it and what rights you have. It applies to our clients, residents referred to us, employees, subcontractors, suppliers, job applicants and website visitors.</p>
          <p>We process personal data in line with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, the Data (Use and Access) Act 2025 and other applicable data protection law.</p>
          <h2>2. Who we are</h2>
          <p>Dean &amp; Co Cleaning Services Ltd is the data controller of your personal data. Company No. 14648906. Registered office: Suite 3, 62 Roseville Road, Leeds LS8 5DR. ICO registration: ZC161771. Data protection contact: <a href="mailto:operations@deancocleaning.co.uk">operations@deancocleaning.co.uk</a>.</p>
          <h2>3. The personal data we collect</h2>
          <ul>
          <li><strong>Clients and enquirers:</strong> name, job title, organisation, email address, telephone number, site address, service records, site access arrangements, billing details, payment records and communications.</li>
          <li><strong>Residents referred to us:</strong> name, property address, access arrangements, and any information about your needs that is required to carry out the work safely and respectfully.</li>
          <li><strong>Employees, cleaners and subcontractors:</strong> identity and contact details, date of birth, National Insurance number, emergency contacts, right to work documents, recruitment, contract, payroll, pension, training and qualification records, and attendance and performance records.</li>
          <li><strong>Job applicants:</strong> your application details, qualifications, employment history and references.</li>
          <li><strong>Website visitors:</strong> the content of your enquiry, your contact details and limited technical data such as your IP address and cookie data.</li>
          </ul>
          <h2>4. Special category and vetting data</h2>
          <p>Because of the environments we work in, we process some more sensitive information. This includes security clearance information, DBS or other background check results where necessary and lawful for the role or site, and health information needed for welfare, reasonable adjustments or safe working. If a resident's health information is shared with us through a referral, we only use what we need to carry out the work.</p>
          <p>Where we process special category data, we rely on an additional condition under Article 9 of the UK GDPR, usually employment law, occupational health, explicit consent, or legal claims. Where we process criminal records data, we do so under Article 10 and Schedule 1 of the Data Protection Act 2018. We do not keep copies of DBS certificates beyond the period allowed by the DBS Code of Practice.</p>
          <h2>5. How we collect your personal data</h2>
          <ul>
          <li>Directly from you, when you enquire, book a service, enter into a contract, apply for a job or contact us.</li>
          <li>From clients, site owners, insurers and referrers, in connection with site access, vetting and the services we provide.</li>
          <li>From third parties such as the Disclosure and Barring Service and referees, when checking suitability for a role.</li>
          <li>Automatically, through cookies when you use our website.</li>
          </ul>
          <h2>6. Why we use your data and our lawful basis</h2>
          <div className="table-wrap"><table><thead><tr><th scope="col">Purpose</th><th scope="col">Lawful basis</th></tr></thead><tbody>
          <tr><td>Providing quotes and delivering cleaning services</td><td>Contract; legitimate interests</td></tr>
          <tr><td>Managing bookings, contracts, billing and payment</td><td>Contract; legal obligation</td></tr>
          <tr><td>Recruiting, employing and paying our workforce</td><td>Contract; legal obligation</td></tr>
          <tr><td>Vetting and clearance</td><td>Legal obligation; legitimate interests; substantial public interest</td></tr>
          <tr><td>Health, safety and welfare at work</td><td>Legal obligation; employment law</td></tr>
          <tr><td>Meeting waste carrier and environmental duties</td><td>Legal obligation</td></tr>
          <tr><td>Responding to enquiries and marketing our services</td><td>Consent; legitimate interests</td></tr>
          <tr><td>Meeting legal, tax, audit and regulatory duties</td><td>Legal obligation</td></tr>
          </tbody></table></div>
          <p>Where we rely on consent, you can withdraw it at any time. Where we rely on legitimate interests, we make sure your rights are not overridden.</p>
          <h2>7. Who we share your personal data with</h2>
          <p>We never sell your personal data. We only share it where necessary, with appropriate safeguards. Recipients may include:</p>
          <ul>
          <li>Clients, site owners, insurers and referrers, for vetting, site access and service delivery.</li>
          <li>Vetting and clearance bodies, including the Disclosure and Barring Service.</li>
          <li>Subcontractors and suppliers involved in delivering a service or removing waste.</li>
          <li>Our accountants, payroll, HR, banking, software and IT providers, including the services that host our website, handle our enquiry forms and, if we use them, provide website analytics.</li>
          <li>Our professional advisers, including legal, HR, insurance and compliance advisers.</li>
          <li>Regulators and authorities such as HMRC, the Environment Agency and the ICO, where required.</li>
          <li>Other parties where you have given consent or where the law requires it.</li>
          </ul>
          <h2>8. International transfers</h2>
          <p>We aim to store and process personal data within the UK. Some of our service providers may store data in the European Economic Area or elsewhere, and data may be accessed from Portugal. Where personal data is transferred outside the UK, we make sure an appropriate safeguard is in place, such as a UK adequacy regulation or the International Data Transfer Agreement.</p>
          <h2>9. How long we keep your personal data</h2>
          <div className="table-wrap"><table><thead><tr><th scope="col">Record type</th><th scope="col">Typical retention period</th></tr></thead><tbody>
          <tr><td>Client contracts, job and completion records</td><td>6 years after the end of the contract</td></tr>
          <tr><td>Accounting, invoicing and tax records</td><td>6 years</td></tr>
          <tr><td>Employee and HR records</td><td>Duration of employment plus 6 years</td></tr>
          <tr><td>DBS and vetting records</td><td>Record of the check kept; certificate details not kept beyond the period allowed by the DBS Code of Practice</td></tr>
          <tr><td>Waste transfer and consignment notes</td><td>At least 2 years, or 3 years for hazardous waste consignment notes</td></tr>
          <tr><td>Unsuccessful job applications</td><td>Up to 12 months</td></tr>
          <tr><td>Website enquiries and marketing data</td><td>Up to 24 months, or until consent is withdrawn</td></tr>
          </tbody></table></div>
          <h2>10. How we keep your data secure</h2>
          <p>We use appropriate technical and organisational measures to protect personal data, including access controls, secure storage of vetting and HR records, staff confidentiality obligations and a data breach procedure. If a serious breach occurs, we will notify the ICO within 72 hours where required, and affected people where there is a high risk to their rights.</p>
          <h2>11. Your rights</h2>
          <p>You have the right to be informed about how we use your data, to access a copy of it, to have it corrected, to ask us to erase it, to restrict how we use it, to receive it in a reusable format, to object to certain uses including direct marketing, and rights relating to automated decisions. Some of these rights do not apply in every situation, and we will always explain our decision.</p>
          <p>To exercise your rights, contact <a href="mailto:operations@deancocleaning.co.uk">operations@deancocleaning.co.uk</a>. We will respond within one calendar month, or tell you if we need longer for a complex request. There is normally no charge.</p>
          <h2>12. Cookies</h2>
          <p>Please see our <Link href="/cookie-policy">Cookie Policy</Link>. We only set non essential cookies with your consent.</p>
          <h2>13. Automated decisions</h2>
          <p>We do not make decisions with a legal or similarly significant effect on you based solely on automated processing.</p>
          <h2>14. How to complain</h2>
          <p>If you're unhappy with how we've handled your data, please contact us first at <a href="mailto:operations@deancocleaning.co.uk">operations@deancocleaning.co.uk</a> so we can try to put things right. You also have the right to complain to the Information Commissioner's Office: Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF, <a href="tel:+443031231113">0303 123 1113</a>, <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk<span className="sr-only"> (opens in a new tab)</span></a>.</p>
          <h2>15. Changes to this policy</h2>
          <p>We review this policy regularly and will update it when our processing or the law changes. The latest version will always be published on our website.</p>
        </div>
      </section>
    </>
  )
}
