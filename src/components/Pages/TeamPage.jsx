import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import TeamSection from '../Section/TeamSection';
import { pageTitle } from '../../helpers/PageTitle';

const teamData = [
  {
    imgUrl: '/images/team_member_01.jpg',
    name: 'Daniel Thomas',
    designation: 'Found & CEO',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_02.jpg',
    name: 'David Jarvis',
    designation: 'President of Marketing',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_03.jpg',
    name: 'Michale Brown',
    designation: 'President of Network Admin',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_04.jpg',
    name: 'Kaitlyn Kristy',
    designation: 'Office Manager',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_05.jpg',
    name: 'James Redford',
    designation: 'IT Service Manager',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_07.jpg',
    name: 'Silas Jones',
    designation: 'IT Account Manager',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_06.jpg',
    name: 'Karla Vogel',
    designation: 'Call Center Manager',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_08.jpg',
    name: 'Justin Martin',
    designation: 'IT Manager',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_09.jpg',
    name: 'Liliana Donato',
    designation: 'IT Technician',
    srcUrl: '/team/team-details',
  },
];

export default function TeamPage() {
  pageTitle('Team');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Team Members" bgUrl="/images/page_header_1.jpeg" />
      <Section pt="140" ptLg="80" pb="110" pbLg="55">
        <div className="container">
          <TeamSection data={teamData} />
        </div>
      </Section>
    </>
  );
}
