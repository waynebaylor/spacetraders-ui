import * as localforage from 'localforage';
import { Agent, Contract, Faction, Ship } from '../sdk';

class DataService {
  async getToken() {
    return await localforage.getItem<string>('token');
  }

  async setToken(token: string) {
    await localforage.setItem('token', token);
  }

  async getAgent() {
    return await localforage.getItem<Agent>('agent');
  }

  async setAgent(agent: Agent) {
    await localforage.setItem('agent', agent);
  }

  async getContract() {
    return await localforage.getItem<Contract>('contract');
  }

  async setContract(contract: Contract) {
    await localforage.setItem('contract', contract);
  }

  async getFaction() {
    return await localforage.getItem<Faction>('faction');
  }

  async setFaction(faction: Faction) {
    await localforage.setItem('faction', faction);
  }

  async getShip() {
    return await localforage.getItem<Ship>('ship');
  }

  async setShip(ship: Ship) {
    await localforage.setItem('ship', ship);
  }
}

export const dataService = new DataService();
