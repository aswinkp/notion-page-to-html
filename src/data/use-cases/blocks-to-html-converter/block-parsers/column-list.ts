import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';
import { blocksToHtml } from '../../../helpers/blocks-to-html';

export class ColumnListBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    let blocks = blocksToHtml(this._block.children);
    console.log("Column list", blocks);
    return blocks;
  }
}
