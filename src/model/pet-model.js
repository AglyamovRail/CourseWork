import { fetchPets, addPet, updatePet, deletePet } from '../api.js';

export default class PetsModel {
    constructor() {
        this.boardpets = [];
    }

    async init() {
        this.boardpets = await fetchPets();
    }

    async addNewPet(newPet) {
        const addedPet = await addPet(newPet);
        if (addedPet) {
            this.boardpets.push(addedPet);
        }
    }

    async updatePet(petId, updatedPet) {
        const updated = await updatePet(petId, updatedPet);
        if (updated) {
            const index = this.boardpets.findIndex((pet) => pet.id === petId);
            if (index !== -1) {
                this.boardpets[index] = updated;
            }
        }
    }

    async deletePet(petId) {
        const deleted = await deletePet(petId);
        if (deleted) {
            this.boardpets = this.boardpets.filter((pet) => pet.id !== petId);
        }
    }

    getPets() {
        return this.boardpets;
    }
}
