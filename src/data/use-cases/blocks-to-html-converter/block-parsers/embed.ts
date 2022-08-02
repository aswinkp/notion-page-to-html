import { Block } from '../../../protocols/blocks';
import { ToHtml } from '../../../../domain/use-cases/to-html';

export class EmbedBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    if (!this._src) return '';
    return `<iframe
    src="${this._src}"
  ></iframe>`;
  }

  private get _src() {
    return this._block.properties?.source;
  }
}
