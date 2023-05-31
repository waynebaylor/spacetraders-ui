/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FactionTrait } from './FactionTrait';
import {
    FactionTraitFromJSON,
    FactionTraitFromJSONTyped,
    FactionTraitToJSON,
} from './FactionTrait';

/**
 * 
 * @export
 * @interface Faction
 */
export interface Faction {
    /**
     * 
     * @type {string}
     * @memberof Faction
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof Faction
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Faction
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Faction
     */
    headquarters: string;
    /**
     * 
     * @type {Array<FactionTrait>}
     * @memberof Faction
     */
    traits: Array<FactionTrait>;
}

/**
 * Check if a given object implements the Faction interface.
 */
export function instanceOfFaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "headquarters" in value;
    isInstance = isInstance && "traits" in value;

    return isInstance;
}

export function FactionFromJSON(json: any): Faction {
    return FactionFromJSONTyped(json, false);
}

export function FactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Faction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'name': json['name'],
        'description': json['description'],
        'headquarters': json['headquarters'],
        'traits': ((json['traits'] as Array<any>).map(FactionTraitFromJSON)),
    };
}

export function FactionToJSON(value?: Faction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': value.symbol,
        'name': value.name,
        'description': value.description,
        'headquarters': value.headquarters,
        'traits': ((value.traits as Array<any>).map(FactionTraitToJSON)),
    };
}
