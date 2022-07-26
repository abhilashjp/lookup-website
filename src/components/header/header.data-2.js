import Link from 'components/link';

export default function FirstPost() {
  return (
    <>
      <h1 className="title">
  Read{' '}
  <NextLink href="/docs/intro">
    <a>this page!</a>
  </NextLink>
</h1>
    </>
  );
}
