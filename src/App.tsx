import ImageSearchUsingTextDescriptions from './components/ImageSearchUsingTextDescriptions';
import SearchBox from './components/SearchBox';
import Heading from './components/Heading';
import WithSuspense from './components/WithSuspense';



export default function Home() {
  return (
    <>
      <section className='mb-6'>
        <Heading />
      </section>

      <WithSuspense>
        <SearchBox />
      </WithSuspense>

      <section className='mt-[6vmax]'>
        <WithSuspense>
          <ImageSearchUsingTextDescriptions />
        </WithSuspense>
      </section>
    </>
  );
}
