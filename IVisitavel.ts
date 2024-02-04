import { IVisitor } from "./IVisitor";
export interface IVisitavel {
  accept(visitor: IVisitor): void;
}
