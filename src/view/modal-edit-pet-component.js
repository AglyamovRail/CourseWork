import { createElement } from '../framework/render.js';

function createModalEditPetComponentTemplate({ name, type, sex, breed, age }) {
    return `
        <div class="modal">
            <div class="modal__content">
                <button class="modal__close" aria-label="Закрыть">×</button>
                <h2>Редактировать питомца</h2>
                <form class="modal__form">
                    <div>
                        <label>Имя:</label>
                        <input type="text" name="name" value="${name}" required>
                    </div>
                    <div>
                        <label>Тип:</label>
                        <input type="text" name="type" value="${type}" required>
                    </div>
                    <div>
                        <label>Пол:</label>
                        <select name="sex" required>
                            <option value="Мужской" ${sex === 'Мужской' ? 'selected' : ''}>Мужской</option>
                            <option value="Женский" ${sex === 'Женский' ? 'selected' : ''}>Женский</option>
                        </select>
                    </div>
                    <div>
                        <label>Порода:</label>
                        <input type="text" name="breed" value="${breed}">
                    </div>
                    <div>
                        <label>Возраст (в месяцах):</label>
                        <input type="number" name="age" value="${age}" required>
                    </div>
                    <div class="modal__buttons">
                        <button type="submit" class="modal__button modal__button--add">Сохранить</button>
                        <button type="button" class="modal__button modal__button--cancel">Отмена</button>
                    </div>
                </form>
            </div>
        </div>`;
}

export default class ModalEditPetComponent {
    constructor(pet) {
        this.pet = pet;
        this.element = null;
    }

    getTemplate() {
        return createModalEditPetComponentTemplate(this.pet);
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

    open() {
        this.getElement().classList.add('open');
    }

    close() {
        this.getElement().classList.remove('open');
    }
}
