import MusicCard from '@element/MusicCard';
import PageTitle from '@module/PageTitle/PageTitle';

export default function Home() {
  return (
    <>
      <PageTitle title='Explore'/>
      
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <MusicCard title='Ringo' artist='Joris Voorn' />
        <MusicCard title='Ringo' artist='Joris Voorn' />
        <MusicCard title='Ringo' artist='Joris Voorn' />
        <MusicCard title='Ringo' artist='Joris Voorn' />
        <MusicCard title='Ringo' artist='Joris Voorn' />
        <MusicCard title='Ringo' artist='Joris Voorn' />
      </section>
    </>
  ) 
}
