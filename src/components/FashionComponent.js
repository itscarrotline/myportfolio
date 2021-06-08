import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CASES from '../shared/cases.js';
// import FashionCase from ./.js

//  function FashionCard({ }) {
//   return (
//     <Card>
//       <Link to={FashionCase}>
//         <CardImg width="100%" src={CASES.coverimg} alt={CASES.description} />
//         <CardImgOverlay>
//           <CardTitle>{CASES.name}</CardTitle>
//         </CardImgOverlay>
//       </Link>
//     </Card>
//   );
// }

function Fashion() {
  return (
    <div>
      <h1>Fashion</h1>
    </div>
  );
}

export default Fashion;
