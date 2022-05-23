export class Maneuver {
    type: ManeuverType;
    difficulty: ManeuverDifficulty;
}

class ManeuverType {
    speed: number;
    bearing: ManeuverBearing;
}

enum ManeuverBearing {
    LeftTurn,
    LeftBank,
    Straight,
    RightBank,
    RightTurn,
    Koiogram,
    SegnorsLoop,
    TallonRoll
}

enum ManeuverDifficulty {
    White,
    Red,
    Purple
}