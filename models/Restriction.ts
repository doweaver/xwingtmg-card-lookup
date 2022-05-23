import { BaseSize } from "./BaseSize";
import { Faction } from "./Faction";
import { PilotBuild } from "./PilotBuild";
import { Ship } from "./Ship";
import { Squad } from "./Squad";
import { Pilot } from "./Pilot";
import { Upgrade } from "./UpgradE";

export class Restriction {
    restrictions?: Restriction[];
    shipRestrictions?: ShipRestrictions;
    baseSizeRestrictions?: BaseSizeRestrictions;
    factionRestrictions?: FactionRestrictions;
    squadRestrictions?: SquadRestrictions;

    restrictionsMet(pilotBuild: PilotBuild, squad: Squad): boolean {
        const shipRestrictionsMet = this.shipRestrictions.areMet(pilotBuild);
        const baseSizeRestrictionsMet = this.baseSizeRestrictions.areMet(pilotBuild);
        const factionRestrictionsMet = this.factionRestrictions.areMet(pilotBuild);
        const squadRestrictionsMet = this.squadRestrictions.areMet(squad);

        return
            shipRestrictionsMet &&
            true    
    };
}

class ShipRestrictions {
    ships: Ship[];

    areMet(pilotBuild: PilotBuild): boolean {
        return this.ships.some(targetShip => targetShip.name === pilotBuild.pilot.ship.name)
    }
}

class BaseSizeRestrictions {
    baseSizes: BaseSize[];

    areMet(pilotBuild: PilotBuild): boolean {
        return this.baseSizes.some(targetBaseSize => targetBaseSize === pilotBuild.pilot.ship.baseSize)
    }
}

class FactionRestrictions {
    factions: Faction[];

    areMet(pilotBuild: PilotBuild): boolean {
        return this.factions.some(targetFaction => targetFaction === pilotBuild.pilot.faction)
    }
}

class SquadRestrictions {
    pilots: Pilot[];
    upgrades: Upgrade[];
    areMet(squad: Squad): Boolean {
        throw new Error("Method not implemented.");
    }
}