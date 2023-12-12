import Layout from '@/Layout/Main.Layout';
import { About, Contact, Intro, Projects } from '@/components';
import { PostType } from '@/types';
import { FC } from 'react';

interface IHomeProps {
  Posts: [PostType];
}

const Home: FC<IHomeProps> = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
