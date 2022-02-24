import { Breadcrumb } from 'components/shared/Breadcrumb/Breadcrumb';
import { Layout } from './Layout';

export const PublicLayout = ({
  children,
  breadcrumb,
  breadcrumbTitle,
  description,
  headerData,
  footerDta,
  subNav
}) => {
  return (
    <Layout headerData={headerData} footerDta={footerDta} subNav={subNav}>
      <Breadcrumb
        breadcrumb={breadcrumb}
        title={breadcrumbTitle}
        description={description}
        headerData={headerData}
         footerDta={footerDta}
      />
      <>{children}</>
    </Layout>
  );
};
