import HeroIllustration from '../components/HeroIllustration';
import JobBoard from '../components/JobBoard';

function Homepage() {
  return (
    <main className='
      pb-3 sm:pb-7 
      bg-[linear-gradient(90.51deg,#868686_1.54%,#5C5C5C_101.46%)]'>
      <HeroIllustration />
      <JobBoard />
    </main>
  );
}

export default Homepage;