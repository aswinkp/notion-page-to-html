import { Block } from '../../protocols/blocks';
import { ToHtml, ToHtmlClass } from '../../../domain/usecases/to-html';
import * as blockParsers from './block-parsers';

export class BlockDispatcher {
  dispatch(block: Block): ToHtml {
    // if (block.type === 'column_list') {
    //   console.log(JSON.stringify(block));
    // }
    const ToHtmlConverter = fromBlockToHtmlConverter[block.type] || blockParsers.UnknownBlockToHtml;
    return new ToHtmlConverter(block);
  }
}

const fromBlockToHtmlConverter: Record<string, ToHtmlClass> = {
  text: blockParsers.TextBlockToHtml,
  header: blockParsers.HeaderBlockToHtml,
  sub_header: blockParsers.SubHeaderBlockParser,
  sub_sub_header: blockParsers.SubSubHeaderBlockParser,
  to_do: blockParsers.ToDoBlockToHtml,
  code: blockParsers.CodeBlockToHtml,
  equation: blockParsers.EquationBlockToHtml,
  quote: blockParsers.QuoteBlockToHtml,
  divider: blockParsers.DividerBlockToHtml,
  list: blockParsers.ListBlockToHtml,
  video: blockParsers.YouTubeVideoBlockToHtml,
  image: blockParsers.ImageBlockToHtml,
  callout: blockParsers.CalloutBlockToHtml,
  toggle: blockParsers.ToggleBlockToHtml,
  page: blockParsers.PageBlockToHtml,
  column: blockParsers.ColumnBlockToHtml,
  column_list: blockParsers.ColumnListBlockToHtml,
  embed: blockParsers.EmbedBlockToHtml,
};
