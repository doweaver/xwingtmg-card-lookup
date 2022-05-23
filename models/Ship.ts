import {Maneuver} from './Maneuver'
import {Arc} from './Arc'
import { BaseSize } from './BaseSize';

export class Ship {
  name: string;
  baseSize: BaseSize;
  arcs: Arc[];
  agility: number;
  hull: number;
  shields: number;
  maneuvers: Maneuver[];
}