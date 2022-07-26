import Link from 'components/link';

export default function FirstPost() {
  return (
    <>
      <h1 className="title">
  Read{' '}
  <Link href="/docs/intro">
    <a>this page!</a>
  </Link>
</h1>
    </>
  );
}
