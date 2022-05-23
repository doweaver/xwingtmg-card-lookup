import { Restriction } from "./Restriction";

export class Upgrade {
    name: string;
    type: UpgradeType[];
    cost: number;
    restrictions: Restriction[];
    inStandard: boolean;
    inExtended: boolean;
    banned: boolean;
    restricted: boolean;
}

export enum UpgradeType {
  Astromech,
  Cannon,
  Configuration,
  Crew,
  ForcePower,
  Gunner,
  Illicit,
  Missile,
  Modification,
  Payload,
  Sensor,
  Talent,
  TacticalRelay,
  Tech,
  Title,
  Torpedo,
  Turret
}