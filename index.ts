import { NotionPage } from './dist/main/protocols/notion-page';

const NotionPageToHtml = require('./src/index');

// using then
NotionPageToHtml.convert('https://helpkit.notion.site/First-Help-Article-ce4f92346b084be8be5a5536c7287d6a').then(
  (page: NotionPage) => console.log(page.html),
);
