
// import { useState } from 'react';
// import Link from 'next/link';

// const links = ['Home', 'About', 'Products', 'Contact'];

// export default function PageLinks() {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   return (
//     <>
//     <nav>
//       {links.map((label, index) => (
//         <Link
//           key={label}
//           className={`pagelink ${activeIndex === index ? 'active' : ''}`}
//           onClick={() => setActiveIndex(index)}
//           href="#"
//         >
//           {label}
//         </Link>
//       ))}
//     </nav>
//     </>
//   );
// }
