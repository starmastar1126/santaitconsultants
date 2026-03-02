import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import BrandSection from '../Section/BrandSection';
import ServiceSectionStyle4 from '../Section/ServiceSection/ServiceSectionStyle4';
import TestimonialSection from '../Section/TestimonialSection';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Software Development',
    subTitle:
      'We build custom web and mobile applications that improve efficiency, enhance user experience, and support long-term business growth.',
    imgUrl: '/images/service/service_1.jpg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Cybersecurity Solutions',
    subTitle:
      'We protect your systems with proactive monitoring, risk assessments, threat prevention, and compliance strategies to reduce vulnerabilities.',
    imgUrl: '/images/service/service_2.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Managed IT Services',
    subTitle:
      'We deliver reliable IT support, infrastructure management, and performance optimization to ensure secure, stable, and efficient operations.',
    imgUrl: '/images/service/service_3.jfif',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Business Intelligence',
    subTitle:
      'We transform complex data into actionable insights through analytics, dashboards, and reporting tools that support smarter business decisions.',
    imgUrl: '/images/service/service_4.jpeg',
    href: '/service/services-details',
  },
];

const brandData = [
  { imgUrl: '/images/icons/brand_1.svg' },
  { imgUrl: '/images/icons/brand_2.svg' },
  { imgUrl: '/images/icons/brand_3.svg' },
  { imgUrl: '/images/icons/brand_4.svg' },
  { imgUrl: '/images/icons/brand_5.svg' },
];

const testimonialData = [
  {
    imgUrl: '/images/testimonial/testimonial_thumb_35.png',
    rating: '4',
    desc: "I’ve been working with this team for over a year now and honestly, it’s been a great experience. Their services are reliable, communication is clear, and they always deliver on time. The support team is responsive and professional. I would definitely recommend them to anyone.",
    name: 'Olivia Martinez',
    designation: 'Web Design',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_32.png',
    rating: '4.5',
    desc: "We started using their services last year and it has made a huge difference for our business. Everything is handled professionally and efficiently. They truly care about their clients and it shows in their work. I highly recommend them without hesitation.",
    name: 'Peter Johnson',
    designation: 'Mobile App',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_31.png',
    rating: '4.7',
    desc: "I’ve tried several providers before, but none matched the quality and consistency I found here. Their attention to detail and customer support are outstanding. They go above and beyond to make sure everything runs smoothly. I’m very happy with the results.",
    name: 'Ava Thompson',
    designation: 'AI Solutions',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_33.png',
    rating: '3.9',
    desc: "For the past year, this company has been an essential partner for our growth. Their team is knowledgeable, responsive, and easy to work with. Every project has been completed with care and precision. I confidently recommend their services.",
    name: 'Victoria Lewis',
    designation: 'Web Design',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_34.png',
    rating: '5',
    desc: "Working with them has been one of the best decisions we’ve made. Their expertise and professionalism stand out immediately. Whenever we had questions, they were quick to respond and provide solutions. I’m extremely satisfied with the overall experience.",
    name: 'Max Lawrence',
    designation: 'Mobile App',
  },
];

export default function ServicesPage() {
  pageTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Services" bgUrl="/images/header/page_header_1.jpeg" />

      <Section pt="140" ptLg="80" pb="115" pbLg="55">
        <ServiceSectionStyle4
          sectionTitleUp="Our Service List"
          sectionTitle="We Provide The Solution <br />For Our Clients"
          data={serviceData}
        />
      </Section>

      <Section pt="110" ptLg="80" pb="110" pbLg="80" className="bg-gray">
        <BrandSection data={brandData} />
      </Section>

      <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section>
    </>
  );
}
