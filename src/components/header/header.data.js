import { Link } from 'components/link'

export default [
  {
    path: 'home',
    label: 'Home',
  },
  {
    path: 'ultimate-feature',
    label: 'Feature',
  },
  {
    path: 'pricing',
    label: 'Pricing',
  },
  {
    path: 'faq',
    label: 'Faq',
  },
  
  {
     path:'/docs/intro/',
    label: 'Guides',  
  },
  
  
];

export default function guide() 

function guide() {
  return (
    <ul>
      <li>
        <Link href="/docs/intro/">
          <a>guide</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/intro/">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/blog/">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}
