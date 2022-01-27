import CMS from 'netlify-cms-app';
import { es } from 'netlify-cms-locales';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import Youtube from './editor-components/Youtube';
import Soundcloud from './editor-components/Soundcloud';

CMS.registerLocale('es', es);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.registerEditorComponent(Youtube);
CMS.registerEditorComponent(Soundcloud);
