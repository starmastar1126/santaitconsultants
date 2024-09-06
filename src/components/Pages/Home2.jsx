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
    subTitle:
      'We design and develop tailored web and mobile applications to meet your unique business needs, using modern technologies like React and Node.js.',
    imgUrl: '/images/service_1.jpg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'Cybersecurity Solutions',
    subTitle:
      'We provide comprehensive security audits, threat detection, and compliance services to protect your business from cyber risks and ensure data privacy.',
    imgUrl: '/images/service_2.jpeg',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Managed IT Services',
    subTitle:
      'Our ongoing support and infra structure management ensure your systems run smoothly, with proactive monitoring and fast issue resolution.',
    imgUrl: '/images/service_3.jfif',
    href: '/service/services-details',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Business Intelligence',
    subTitle:
      'We implement data-driven solutions, providing custom dashboards and insights to help businesses make informed decision and optimize operations.',
    imgUrl: '/images/service_4.jpeg',
    href: '/service/services-details',
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
    imgUrl: '/images/testimonial_thumb_1.png',
    subTitle:
      "Fantastic IT support! The team was incredibly responsive and resolved our issues quickly. Their proactive approach and technical expertise kept our systems running smoothly, minimizing disruptions. We greatly appreciate their dependable service.",
    rating: '5',
    designation: 'Web design',
    name: 'Mike R.',
  },
  {
    imgUrl: '/images/testimonial_thumb_2.png',
    subTitle:
      "The cloud migration handled by this team was flawless. They ensured a smooth and secure transition with minimal downtime. Their support was thorough, addressing all our concerns and optimizing our cloud environment. We couldn't be happier with the results.",
    rating: '4.5',
    designation: 'Ui designer',
    name: 'Sarah L.',
  },
  {
    imgUrl: '/images/testimonial_thumb_3.png',
    subTitle:
      "Exceptional service! The team seamlessly transformed our IT infrastructure with impressive efficiency. Their expertise and attention to detail were evident throughout the project. Highly recommended for anyone looking to upgrade their IT systems.",
    rating: '4',
    designation: 'Web developer',
    name: 'John D.',
  },
];

const portfolioData = [
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'digital',
  },
  {
    imgUrl: '/images/portfolio_1.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'graphics',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'marketing',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'graphics',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio_1.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'marketing',
  },
  {
    imgUrl: '/images/portfolio_2.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'graphics',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio_4.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'marketing',
  },
  {
    imgUrl: '/images/portfolio_3.jpeg',
    title: 'Marketing Web-design',
    projectUrl: '/portfolio/portfolio-details',
    category: 'digital',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.svg' },
  { imgUrl: '/images/brand_2.svg' },
  { imgUrl: '/images/brand_3.svg' },
  { imgUrl: '/images/brand_4.svg' },
  { imgUrl: '/images/brand_5.svg' },
];

const stepData = [
  {
    imgUrl: 'images/step_1.jpeg',
    title: 'Marketing',
    desc: 'We provide a range of digital marketing lutions including website design.',
    step: '01',
  },
  {
    imgUrl: 'images/step_2.jpeg',
    title: 'Development',
    desc: 'We provide a range of digital marketing lutions including website design.',
    step: '02',
  },
  {
    imgUrl: 'images/step_3.jpeg',
    title: 'Release',
    desc: 'We provide a range of digital marketing lutions including website design.',
    step: '03',
  },
];

const postData = [
  {
    imgUrl: '/images/post_4.jpeg',
    title: 'What services does your business?',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 3,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_5.jpeg',
    title: 'Introducing the latest tech features for you',
    desc: 'We provide a range of digital marketing lutions including website design.',
    postUrl: '/blog/blog-details',
    postedBy: 'admin',
    adminUrl: '/',
    numberOfComment: 4,
    commentUrl: '/blog/blog-details',
  },
  {
    imgUrl: '/images/post_6.jpeg',
    title: 'The creative studio coming soon',
    desc: 'We provide a range of digital marketing lutions including website design.',
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
        bgUrl="/images/hero_slider_4.jpeg"
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
          imgUrl="/images/about_img_1.png"
          bgImgUrl="/images/experience_bg_2.jpg"
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
          imgUrl="/images/why_chose_1.jpeg"
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
        style={{ backgroundImage: `url('/images/testimonial_bg_1.jpeg')` }}
      >
        <TestimonialSliderStyle3 data={testimonialData} />
      </Section>

      <Section
        pt="80"
        ptLg="75"
        pb="85"
        pbLg="55"
        style={{ backgroundImage: `url('/images/contact_bg.jpeg')` }}
      >
        <ContactSectionStyle2
          sectionTitle="Let’s Work Together?"
          sectionTitleUp="Contact With Us"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          featureList={[
            'Refreshing to get such a personal touch',
            'Refreshing to get such a personal touch',
          ]}
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question?',
              title: '+ 1 (510) 854-9596',
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
