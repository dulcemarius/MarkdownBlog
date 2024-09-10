import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
      fill="currentColor"
    />
  </svg>
);

interface BlogPost {
  slug: string;
  metadata: {
    publishedAt: string;
    title: string;
  };
}

export function BlogPosts() {
  const allBlogs = getBlogPosts().sort(
    (a: BlogPost, b: BlogPost) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className="w-auto">
      {allBlogs.map(({ slug, metadata }: BlogPost) => (
        <Link
          key={slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${slug}`}
        >
          <div className="space-x-0">
            <p className="text-neutral-600 dark:text-neutral-400 w-auto tabular-nums">
              {formatDate(metadata.publishedAt, false)}
            </p>
            <div className="flex items-center">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {metadata.title}
              </p>
              <span className="ml-2 mt-1">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
