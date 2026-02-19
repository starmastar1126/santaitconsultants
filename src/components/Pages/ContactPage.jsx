import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import LocationInMap from '../LocationInMap';
import Section from '../Section';
import FormStyle2 from '../Form/FormStyle2';
import IconboxStyle2 from '../Iconbox/IconboxStyle2';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import { pageTitle } from '../../helpers/PageTitle';

const locationData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6341.6703353416215!2d-121.98062872368371!3d37.370076935368246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca1d85b3de03%3A0xb6dd37eb491f397c!2s2819%20Agate%20Dr%2C%20Santa%20Clara%2C%20CA%2095051!5e0!3m2!1sen!2sus!4v1725549751848!5m2!1sen!2sus';

export default function ContactPage() {
  pageTitle('Contact');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Contact" bgUrl="/images/header/page_header_1.jpeg" />
      <Section pt="133" ptLg="75" pb="133" pbLg="75">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <SectionHeadingStyle3
                sectionTitleUp="Have any question?"
                sectionTitle="Write a Message"
              />
              <FormStyle2 />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cs_pl_60 cs_pl_lg_0 cs_pt_lg_60">
                <SectionHeadingStyle3
                  sectionTitleUp="Contact With Us"
                  sectionTitle="Let’s work together"
                  sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
                  className="cs_mb_40"
                />
                <div className="cs_iconbox_wrapper cs_style1">
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_1.svg"
                    title="+ 1 (708) 465-1319"
                    titleUp="Have Any Question?"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_2.svg"
                    title="contact@santaitconsultants.com"
                    titleUp="Send Email"
                  />
                  <IconboxStyle2
                    imgUrl="/images/icons/contact_icon_3.svg"
                    title="Santa Clara, California, USA"
                    titleUp="Address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <LocationInMap data={locationData} />
    </>
  );
}
