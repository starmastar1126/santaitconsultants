import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Gallery from '../Gallery';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

const portfolioData = [
  {
    imgUrl: '/images/portfolio/websites (1).jpg',
    title: 'Baritastic',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (2).jpg',
    title: 'BatFone',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (3).jpg',
    title: 'Digitize Your Blood Reports!',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (4).jpg',
    title: 'MBonzo',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (5).jpg',
    title: 'Call Sling - AI-Powered Inbound Call',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (6).jpg',
    title: 'Shopify App for custom Products',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (7).jpg',
    title: 'Driven Day',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (8).jpg',
    title: 'Brings Families Closer!',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (9).jpg',
    title: 'Go Power',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (10).jpg',
    title: 'Gyroscope Dental App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (11).jpg',
    title: 'Bike Connectivity',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (12).jpg',
    title: 'HIVE - AI-Powered Team Collaboration',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (13).jpg',
    title: 'IM Clovis',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (14).jpg',
    title: 'Ideal Clima Smart Chatbot Assistant',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (15).jpg',
    title: 'Real Estate Agent Management & Coach',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (16).jpg',
    title: 'BLE Medical System!',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (17).jpg',
    title: 'Health Shopify Store',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (18).jpg',
    title: 'Nutrition AI',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (19).jpg',
    title: 'DocuMed AI',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (20).jpg',
    title: 'GRO — Farmers Networking Platform',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (21).jpg',
    title: 'Ponder',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (22).jpg',
    title: 'Zytrack',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (23).jpg',
    title: 'Just Thrive',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (24).jpg',
    title: 'Shopify Store',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (25).jpg',
    title: 'Samantha-e | Smart AI Chatbot Custom',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (26).jpg',
    title: 'Scrowbly',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (27).jpg',
    title: 'Ticket Tribe',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (28).jpg',
    title: 'TshirtDeal CSR Bot',
    projectUrl: '/portfolio/portfolio-details',
    category: 'ai',
  },
  {
    imgUrl: '/images/portfolio/websites (29).jpg',
    title: 'Supplement Store for Mental Health',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (30).jpg',
    title: 'Wellness with Natural Products',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (31).jpg',
    title: 'WizKid',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (32).jpg',
    title: 'WorkOf',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/websites (33).jpg',
    title: 'Work Ready Mobile',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (34).jpg',
    title: 'A Handy App for Handyman Services!',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/websites (35).jpg',
    title: 'Shopify Store',
    projectUrl: '/portfolio/portfolio-details',
    category: 'website',
  },
  {
    imgUrl: '/images/portfolio/design (1).png',
    title: 'Super Receptionlist',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (2).png',
    title: 'Vegan Social',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (3).png',
    title: 'ClickScore',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (4).png',
    title: 'Destsch & Der Die Das Artikel',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (5).png',
    title: 'Marketplace Monitor',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (6).png',
    title: 'My Ayur: Diet & Wellness Plan',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (7).png',
    title: 'ONEME: Your Ultimate Online Dating Experience',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/design (8).png',
    title: 'Protabs - Guitar Tabs',
    projectUrl: '/portfolio/portfolio-details',
    category: 'design',
  },
  {
    imgUrl: '/images/portfolio/mobile (1).png',
    title: 'AirPlane Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (2).png',
    title: 'Cash Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (3).png',
    title: 'Ecommerce Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (4).png',
    title: 'Daily Task Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (5).png',
    title: 'Delivery Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (6).png',
    title: 'Furniture Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (7).png',
    title: 'Illustration Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (8).png',
    title: 'Task Management Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
  {
    imgUrl: '/images/portfolio/mobile (9).png',
    title: 'Sweet Mobile App',
    projectUrl: '/portfolio/portfolio-details',
    category: 'mobile',
  },
];

export default function PortfolioPage() {
  pageTitle('Portfolio');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Our Portfolio" bgUrl="/images/header/page_header_1.jpeg" />
      <Section pt="130" ptLg="75" pb="125" pbLg="55">
        <div className="container">
          <Gallery data={portfolioData} />
        </div>
      </Section>
    </>
  );
}
