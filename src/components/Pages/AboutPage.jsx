import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';
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

const teamData = [
  {
    imgUrl: '/images/team/team_member_01.jpg',
    name: 'Daniel Thomas',
    designation: 'Found & CEO',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team/team_member_04.jpg',
    name: 'Kaitlyn Kristy',
    designation: 'Office Manager',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team/team_member_07.jpg',
    name: 'Silas Jones',
    designation: 'HR Manager',
    srcUrl: '/team/team-details',
  },
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

export default function AboutPage() {
  pageTitle('About Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="About Us" bgUrl="/images/header/page_header_1.jpeg" />

      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutUsSection
          thumbUrl="/images/experience/experience_img.jpeg"
          experienceBgUrl="/images/experience/experience_bg.jpeg"
          experienceIconUrl="/images/icons/experience_icon.svg"
          experienceNumber="40"
          experienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Get Ready for Success with <span className="text-accent">SantaIT</span> Your Path to Growth.'
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials."
          grothTitle="Web development"
          grothPercentage="90"
          featureList={[
            {
              title: 'Software Development',
              subTitle:
                'Services related to financial record-keeping, bookkeeping.',
            },
            {
              title: 'Human Resources (HR) Consulting',
              subTitle: 'Assistance with HR-related tasks such as recruitment.',
            },
          ]}
          btnText="Get A Quote"
          btnUrl="/contact"
          videoBtnText="Watch the video"
          videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
        />
      </Section>

      <Section pt="140" ptLg="80" pb="130" pbLg="70" className="bg-primary">
        <ServiceSection
          data={serviceData}
          sectionTitleDown="<span className='text-accent'>Digital agency</span> services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          textVariant="text-white"
        />
      </Section>

      <Section pt="133" ptLg="75">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/>behind the success"
          sectionTitleUp="Meet Our Team Member"
        />
      </Section>

      <Section
        pt="110"
        ptLg="55"
        pb="140"
        pbLg="80"
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
