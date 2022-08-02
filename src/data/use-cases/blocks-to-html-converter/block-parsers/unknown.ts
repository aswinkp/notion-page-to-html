import { ToHtml } from '../../../../domain/use-cases/to-html';
import {Block} from "../../../protocols/blocks";

export class UnknownBlockToHtml implements ToHtml {
  private readonly _block: Block;

  constructor(block: Block) {
    this._block = block;
  }

  async convert(): Promise<string> {
    return Promise.resolve('');
  }
}
