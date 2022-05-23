export class Arc {
    attackValue: number;
    type: ArcType;
}

enum ArcType {
  Bullseye,
  Front,
  FullFront,
  Back,
  FullBack,
  Turret,
  DoubleTurret
}