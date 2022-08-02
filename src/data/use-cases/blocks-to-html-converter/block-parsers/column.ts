import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blocksToHtml } from '../../../helpers/blocks-to-html';

export class ColumnBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    let html = await blocksToHtml(this._block.children);
    if (this._block.format.column_ratio) {
      return Promise.resolve(`<div style="width: ${this._block.format.column_ratio * 100}%">${html}</div>`);
    }
    return blocksToHtml(this._block.children);
  }
}
