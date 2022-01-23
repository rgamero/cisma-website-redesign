import CMS from 'netlify-cms-app';
import { es } from 'netlify-cms-locales';

// import DistributionPagePreview from './preview-templates/DistributionPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerLocale('es', es);

CMS.registerPreviewTemplate('index', IndexPagePreview);
// CMS.registerPreviewTemplate('distribucion', DistributionPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
