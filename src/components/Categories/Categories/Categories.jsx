import { Card } from './Card/Card';

export const Categories = ({ categories ,headerData ,footerData }) => {


  return (
    <>
      {/* <!-- BEGIN  CATEGORIES --> */}
      {categories.map((category) => (
        <Card key={category.categoryId} category={category} headerData={headerData} footerData={footerData} />
      ))}
      {/* <!--  CATEGORIES EOF   --> */}
    </>
  );
};
