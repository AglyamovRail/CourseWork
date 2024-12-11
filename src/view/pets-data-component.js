import { createElement } from '../framework/render.js';

function createPetsDataComponentTemplate({ name, type, sex, breed, age }) {
    return `
        <div class="pets-data__card">
            <div class="pets-data__info">
                <h2 class="pet_name">${name}</h2>
                <div class="info_block">
                    <span class="label">тип</span>
                    <span class="value">${type}</span>
                </div>
                <div class="info-block">
                    <span class="label">пол</span>
                    <span class="value">${sex}</span>
                </div>
                <div class="info-block">
                    <span class="label">порода</span>
                    <span class="value">${breed}</span>
                </div>
                <div class="info-block">
                    <span class="label">возраст</span>
                    <span class="value">${age} месяца(-ев)</span>
                </div>
            </div>
            <div class="pets-data__actions">
                <button class="pets-data__edit">Редактировать</button>
                <button class="pets-data__delete">Удалить</button>
            </div>
        </div>`;
}

export default class PetsDataComponent {
    constructor(pet) {
        this.pet = pet;
        this.element = null;
    }

    getTemplate() {
        return createPetsDataComponentTemplate(this.pet);
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }

    setEditHandler(callback) {
        this.getElement().querySelector('.pets-data__edit').addEventListener('click', callback);
    }
    

    setDeleteHandler(callback) {
        this.getElement().querySelector('.pets-data__delete')
            .addEventListener('click', callback);
    }
}
