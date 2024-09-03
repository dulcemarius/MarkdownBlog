const Map = dynamic(() => import('./components/map'), {
  ssr: false,
});
import { BlogPosts } from 'app/components/posts'
import dynamic from 'next/dynamic';


export default function Page() {
  return (
    <section className='w-auto'>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome
      </h1>
      <p className="mb-4">
        {`This is my blogging website. I'm a web developer and I love to write about my experiences and learnings,`} {`you can find all`} <a className="underline" href="/blog">{`my posts here.`}</a>
      </p>
      <p className="mb-4">
        {`If you have any questions or suggestions, feel free to reach out to me via`} <a className="underline" href="mailto:dulcemariuspriv@gmail.com">{`e-mail`}</a>
      </p>
      <p className="mb-4">
        {`Have a great day!`}
      </p>
      <Map />
    </section>
  )
}
