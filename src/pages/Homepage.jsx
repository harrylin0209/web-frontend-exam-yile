import HeroIllustration from '../components/HeroIllustration';
import JobBoard from '../components/JobBoard';

function Homepage() {
  return (
    <main className='homepage'>
      <HeroIllustration />
      <JobBoard />
    </main>
  );
}

export default Homepage;