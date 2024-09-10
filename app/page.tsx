import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Page() {
  return (
    <section className="w-auto">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Benvenuto
      </h1>
      <p className="mb-4">
        Questo è il mio sito blog, puoi trovare tutti i{" "}
        <a className="underline" href="/blog">
          miei post qui.
        </a>
      </p>
      <p className="mb-4">
        Se hai domande o suggerimenti,
        <br />
        scrivimi su{" "}
        <a
          className="underline"
          href="https://matrix.to/#/@mariusdulce:beeper.com"
        >
          matrix
        </a>{" "}
        o{" "}
        <a
          className="underline"
          href="mailto:dulcemariuspriv@gmail.com"
        >
          e-mail
        </a>
      </p>
      <SpeedInsights />
    </section>
  );
}
