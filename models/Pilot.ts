import { Faction } from "./Faction";
import { NamedAbility } from "./NamedAbility";
import { RecurringResource } from "./RecurringResource";
import { Ship } from "./Ship";

export class Pilot {
    faction: Faction;
    ship: Ship;
    name: string;
    cost: number;
    loadoutValue: number;
    force: RecurringResource;
    charges: RecurringResource;
    flavorText: string;
    ability: string;
    namedAbility: NamedAbility;
    limitCount: number;
    inStandard: boolean;
    inExtended: boolean;
    banned: boolean;
    restricted: boolean;

    isLimited(): boolean {
        return this.limitCount > 0;
    }
}
