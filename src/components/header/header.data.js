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
  
  const clickHandle = () => {
  document.location.href = 'https://stackoverflow.com/';
}

const Example = () => (
  <button onClick={clickHandle}>StackOverflow</button>
)
];



