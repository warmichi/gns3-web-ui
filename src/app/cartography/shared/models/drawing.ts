import { Selectable } from "../managers/selection-manager";

export class Drawing implements Selectable {
  drawing_id: string;
  project_id: string;
  rotation: number;
  svg: string;
  x: number;
  y: number;
  z: number;
  is_selected = false;
}
