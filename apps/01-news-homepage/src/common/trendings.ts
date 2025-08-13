import articleImg1 from '@/assets/images/image-retro-pcs.jpg';
import articleImg2 from '@/assets/images/image-top-laptops.jpg';
import articleImg3 from '@/assets/images/image-gaming-growth.jpg';

interface Article {
  number: string;
  title: string;
  slug: string;
  description: string;
  img: ImageMetadata;
  content: string;
}

export const trendings: Article[] = [
  {
    number: '01',
    title: 'Reviving Retro PCs',
    slug: 'reviving-retro-pcs',
    description: 'What happens when old PCs are given modern upgrades?',
    img: articleImg1,
    content: 'Reviving retro PCs is a booming hobby that combines nostalgia with technological innovation. This process is not limited to restoring old computers to their original state, but often involves incorporating modern components, such as SSDs, state-of-the-art graphics cards, and faster processors. The result is a system that retains the aesthetics and charm of a bygone era, but offers performance comparable to that of today`s machines. Enthusiasts enjoy the satisfaction of giving these machines a second life and exploring the potential of what can be achieved by combining the best of both worlds.'
  },
  {
    number: '02',
    title: 'Top 10 Laptops of 2022',
    slug: 'top-10-laptops-of-2022',
    description: 'Our best picks for various needs and budgets.',
    img: articleImg2,
    content: 'The “Top 10 Laptops of 2022” list features a carefully curated selection to suit a wide range of users, from students and professionals to gamers and content creators. This guide highlights the best in terms of performance, battery life, design, and value, with options for all budgets. It analyzes key factors such as processor type, screen quality, weight, and portability to help you make an informed decision. The goal is to simplify the search for your next laptop by highlighting the features that really matter.'
  },
  {
    number: '03',
    title: 'The Growth of Gaming',
    slug: 'the-growth-of-gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    img: articleImg3,
    content: 'The growth of gaming has accelerated dramatically, partly driven by the global pandemic. With more people at home, video games became a vital avenue for entertainment and social connection. This explosion in popularity has not only benefited large developers, but has also opened up new opportunities for the eSports sector, streaming on platforms such as Twitch and YouTube, and content creation. The phenomenon has transformed the perception of video games, establishing them as an art form, a social platform, and an important economic driver. This boom has demonstrated gaming`s ability to adapt and thrive in an ever-changing world.'
  },
  {
    number: '04',
    title: 'The Rise of AI in Tech',
    slug: 'the-rise-of-ai-in-tech',
    description: 'Exploring the impact and future of artificial intelligence.',
    img: articleImg1,
    content: 'The rise of artificial intelligence (AI) is radically transforming the technology industry. From voice assistants to machine learning algorithms that personalize your online experience, AI is no longer a technology of the future, but an integral part of our present. This advancement is redefining how we interact with technology and opening up a range of possibilities in fields such as medicine, education, and automation. As AI becomes more sophisticated, the debate centers on its ethics, its impact on employment, and its potential to solve some of humanity`s greatest challenges. Its growth represents a paradigm shift that will continue to shape the world in the years to come.'
  }
];
