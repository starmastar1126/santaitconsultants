import { useEffect } from 'react';
import HeroStyle2 from '../Hero/HeroStyle2';
import LocationInMap from '../LocationInMap';
import Section from '../Section';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2.jsx';
import BrandSection from '../Section/BrandSection';
import ContactSectionStyle2 from '../Section/ContactSection/ContactSectionStyle2.jsx';
import FaqSection from '../Section/FaqSection/index.jsx';
import PortfolioSectionStyle2 from '../Section/PortfolioSection/PortfolioSectionStyle2.jsx';
import PostSectionStyle2 from '../Section/PostSection/PostSectionStyle2.jsx';
import ServiceSection from '../Section/ServiceSection/index.jsx';
import WorkingProcessSection from '../Section/WorkingProcessSection.jsx';
import TestimonialSliderStyle3 from '../Slider/TestimonialSliderStyle3.jsx';
import VideoBlockStyle2 from '../VideoBlock/VideoBlockStyle2.jsx';
import { pageTitle } from '../../helpers/PageTitle.js';

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Software Development',
    subTitle: 'We build custom web and mobile applications that improve efficiency, enhance user experience, and support long-term business growth.',
    imgUrl: '/images/service/service_1.jpg',
    href: '/service/software-development',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Cybersecurity Solutions',
    subTitle: 'We protect your systems with proactive monitoring, risk assessments, threat prevention, and compliance strategies to reduce vulnerabilities.',
    imgUrl: '/images/service/service_2.jpeg',
    href: '/service/cybersecurity-solutions',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Managed IT Services',
    subTitle: 'We deliver reliable IT support, infrastructure management, and performance optimization to ensure secure, stable, and efficient operations.',
    imgUrl: '/images/service/service_3.jfif',
    href: '/service/managed-it-services',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Business Intelligence',
    subTitle: 'We transform complex data into actionable insights through analytics, dashboards, and reporting tools that support smarter business decisions.',
    imgUrl: '/images/service/service_4.jpeg',
    href: '/service/business-intelligence',
  },
];

const videoData = {
  imgSrc: '/images/video_block.jpeg',
  bgImgUrl: '/images/video_block_shape.jpeg',
  videoSrc: 'https:/www.youtube.com/embed/0Tz4Ycjbdbg',
  title: 'Your Trusted Agency of <br /> Choice',
};

const faqData = [
  {
    title: 'What services does your business provide?',
    desc: "Our business provides comprehensive IT consulting services, including custom web and mobile app development, cloud migration, and cybersecurity solutions. We specialize in creating tailored software solutions and ensuring seamless transitions to cloud platforms like AWS and Azure. Additionally, we offer ongoing IT support and management, helping businesses stay secure and efficient in today’s digital landscape.",
  },
  {
    title: 'How can we get started with your services?',
    desc: "Getting started is easy! Simply contact us through our website or by phone to schedule a consultation. We’ll discuss your specific needs, challenges, and goals, and create a tailored solution or roadmap for your project.",
  },
  {
    title: ' Do you work with businesses of all sizes?',
    desc: "Yes, we work with businesses of all sizes, from startups and small businesses to large enterprises. We tailor our solutions to fit the unique needs of your organization, ensuring the best results regardless of your size or industry.",
  },
  {
    title: 'Can you help us migrate to the cloud?',
    desc: "Absolutely! We specialize in cloud consulting and migration, helping businesses move their infrastructure, applications, and data to cloud platforms like AWS, Azure, or Google Cloud. We ensure a seamless transition with minimal downtime.",
  },
];

const testimonialData = [
  {
    imgUrl: '/images/testimonial/testimonial_thumb_21.png',
    subTitle: "Fantastic IT support! The team was incredibly responsive and resolved our issues quickly. Their proactive approach and technical expertise kept our systems running smoothly, minimizing disruptions. We greatly appreciate their dependable service.",
    rating: '5',
    designation: 'Web design',
    name: 'Jennifer W.',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_22.png',
    subTitle: "The cloud migration handled by this team was flawless. They ensured a smooth and secure transition with minimal downtime. Their support was thorough, addressing all our concerns and optimizing our cloud environment. We couldn't be happier with the results.",
    rating: '4.5',
    designation: 'Ui designer',
    name: 'Meriel A.',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_23.png',
    subTitle: "Exceptional service! The team seamlessly transformed our IT infrastructure with impressive efficiency. Their expertise and attention to detail were evident throughout the project. Highly recommended for anyone looking to upgrade their IT systems.",
    rating: '4',
    designation: 'Web developer',
    name: 'Eleftheria P.',
  },
  {
    imgUrl: '/images/testimonial/testimonial_thumb_24.png',
    subTitle: "Exceptional service! The team seamlessly transformed our IT infrastructure with impressive efficiency. Their expertise and attention to detail were evident throughout the project. Highly recommended for anyone looking to upgrade their IT systems.",
    rating: '4',
    designation: 'Web developer',
    name: 'Peter D.',
  },
];

const portfolioData = [
  {
    imgUrl: '/images/portfolio/portfolio10.png',
    title: 'Cash Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/portfolio11.png',
    title: 'Ecommerce Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/portfolio12.png',
    title: 'Daily Task Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/portfolio13.png',
    title: 'Delivery Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/portfolio14.png',
    title: 'Furniture Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/portfolio15.png',
    title: 'Illustration Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/portfolio16.png',
    title: 'Task Management Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/portfolio17.png',
    title: 'Sweet Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/portfolio18.png',
    title: 'AirPlane Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/portfolio1.png',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/portfolio2.png',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
];

const brandData = [
  { imgUrl: '/images/icons/brand_1.svg' },
  { imgUrl: '/images/icons/brand_2.svg' },
  { imgUrl: '/images/icons/brand_3.svg' },
  { imgUrl: '/images/icons/brand_4.svg' },
  { imgUrl: '/images/icons/brand_5.svg' },
];

const stepData = [
  {
    imgUrl: 'images/step/step_1.jpeg',
    title: 'Consultation',
    desc: 'We analyze your business requirements, identify technical challenges, and define a clear strategy to build scalable and efficient software solutions.',
    step: '01',
  },
  {
    imgUrl: 'images/step/step_2.jpeg',
    title: 'Development',
    desc: 'Our expert engineers design, develop, and test high-performance applications using modern technologies and industry best practices.',
    step: '02',
  },
  {
    imgUrl: 'images/step/step_3.jpeg',
    title: 'Deployment',
    desc: 'We launch your solution securely and provide continuous monitoring, optimization, and long-term technical support.',
    step: '03',
  },
];

const postData = [
  {
    imgUrl: '/images/post/post_4.jpeg',
    title: 'What solutions does your company offer?',
    desc: 'We deliver complete IT consulting services including software development.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post/post_5.jpeg',
    title: 'Discover the newest technology updates',
    desc: 'We build scalable cloud solutions and modern enterprise applications.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post/post_6.jpeg',
    title: 'Our innovative tech studio launching soon',
    desc: 'We help startups grow with secure and innovative technology.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 6,
    commentUrl: '/blog/blog-details',
  },
];

const locationData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6341.6703353416215!2d-121.98062872368371!3d37.370076935368246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca1d85b3de03%3A0xb6dd37eb491f397c!2s2819%20Agate%20Dr%2C%20Santa%20Clara%2C%20CA%2095051!5e0!3m2!1sen!2sus!4v1725549751848!5m2!1sen!2sus';

export default function Home2() {
  pageTitle('Corporate Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroStyle2
        titleUp="Santa IT Consultants"
        title='Your Trusted <br />Agency Of <span className="text-accent position-relative d-inline-block">Business</span>'
        btnText="Get A Quote"
        btnUrl="/contact"
        bgUrl="/images/hero/hero_slider_4.jpeg"
      />

      <Section pt="140" ptLg="80" className="bg-primary">
        <ServiceSection
          data={serviceData}
          sectionTitleDown="<span className='text-accent'>Digital agency</span> services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          textVariant="text-white"
        />
      </Section>
      <Section pt="60" ptLg="40" className="bg-primary">
        <VideoBlockStyle2 data={videoData} />
      </Section>

      <Section pb="140" pbLg="80" className="position-relative">
        <AboutSectionStyle2
          imgUrl="/images/about/about_img_11.png"
          bgImgUrl="/images/experience/experience_bg_2.jpg"
          workExprience="40"
          workExprienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Your Trusted Business
          <span className="text-accent">Agency</span>'
          sectionSubTitle="Welcome to <B>Santa IT Consultants</B>, a leading IT consulting firm based in the heart of Silicon Valley, Santa Clara, CA. Since our founding, we have been dedicated to helping businesses of all sizes transform their operations through innovative technology solutions."
          featureList={[
            {
              imgUrl: '/images/icons/iconbox_icon_1.svg',
              title: 'IT Support and Services',
              desc: 'We provide IT support and services, including proactive monitoring, troubleshooting, and maintenance.',
            },
            {
              imgUrl: '/images/icons/iconbox_icon_2.svg',
              title: 'Infrastructure Solutions',
              desc: 'Designing and implementing scalable network solutions for businesses, and reliable connectivity.',
            },
          ]}
        />
      </Section>

      <Section pb="140" pbLg="80" className="position-relative overflow-hidden">
        <FaqSection
          sectionTitleUp="frequently asked questions"
          sectionTitle="Question & Answer"
          sectionSubTitle="Find quick answers to the most commonly asked questions about our services, expertise, and how we can help your business thrive. Whether you’re curious about our offerings, support options, or project timelines, we’ve got you covered."
          data={faqData}
          bgImgUrl="/images/faq_bg1.jpg"
          imgUrl="/images/why_choose/why_chose_1.jpeg"
          iconUrl="/images/icons/faq_icon_1.svg"
          featureTitle="We Have Many Happy Clients Allover World Wide"
          featureList={['Award Wining Agency', 'Higest Success Rates']}
        />
      </Section>

      <Section
        pt="140"
        ptLg="80"
        pb="140"
        pbLg="120"
        style={{ backgroundImage: `url('/images/testimonial/testimonial_bg_1.jpeg')` }}
      >
        <TestimonialSliderStyle3 data={testimonialData} />
      </Section>

      <Section
        pt="80"
        ptLg="75"
        pb="85"
        pbLg="55"
        style={{ backgroundImage: `url('/images/contact/contact_bg.jpeg')` }}
      >
        <ContactSectionStyle2
          sectionTitle="Let’s Work Together?"
          sectionTitleUp="Contact With Us"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          featureList={[
            'Refreshing to get such a personal touch',
          ]}
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question?',
              title: '+ 1 (708) 465-1319',
              textColor: 'text-primary',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Send Email',
              title: 'contact@santaitconsultants.com',
              textColor: 'text-primary',
            },
          ]}
        />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="115"
        pbLg="55"
        style={{ backgroundImage: `url('/images/gallery_bg.jpeg')` }}
        className="background-top-filled"
      >
        <PortfolioSectionStyle2
          sectionTitle="Explore Our Best <br/> Recent Work Projects"
          sectionTitleUp="Our Latest Project"
          data={portfolioData}
        />
      </Section>

      <Section style={{ backgroundImage: 'url("/images/staps_bg.jpeg")' }}>
        <div className="cs_pt_140 cs_pb_133">
          <BrandSection data={brandData} />
        </div>
        <div className="cs_pb_131">
          <WorkingProcessSection
            sectionTitleUp="Working Process"
            sectionTitle="Check How We Work in <br/>  Easy Steps"
            data={stepData}
          />
        </div>
      </Section>

      <Section pt="133" ptLg="70" pb="75" pbLg="45" className="bg-gray">
        <PostSectionStyle2
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News <br/> and Articles"
          data={postData}
        />
      </Section>

      <LocationInMap data={locationData} />
    </>
  );
}
