import { Link } from "react-router";
export default function Heading() {
  return (
    <div>
      <Link to="/">
        <h1 className='m-auto w-max text-3xl font-medium max-sm:text-2xl'>
          Text to Image and Similarity Search
        </h1>
      </Link>
      <h2 className='m-auto w-max text-sm'>
        powered by{' '}
        <a
          href='https://typesense.org/'
          target='_blank'
          rel='noopener noreferrer'
          className=' text-accent'
        >
          type<b>sense|</b>
        </a>
      </h2>
    </div>
  );
}
