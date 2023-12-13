
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default About;