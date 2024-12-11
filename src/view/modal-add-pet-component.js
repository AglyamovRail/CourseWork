import { createElement } from '../framework/render.js';

function createModalAddPetComponentTemplate() {
    return `
        <div class="modal">
            <div class="modal__content">
                <button class="modal__close" aria-label="Закрыть">×</button>
                <h2>Добавить нового питомца</h2>
                <form class="modal__form">
                    <div>
                        <label>Имя:</label>
                        <input type="text" name="name" required>
                    </div>
                    <div>
                        <label>Тип:</label>
                        <input type="text" name="type" required>
                    </div>
                    <div>
                        <label>Пол:</label>
                        <select name="sex" required>
                            <option value="Мужской">Мужской</option>
                            <option value="Женский">Женский</option>
                        </select>
                    </div>
                    <div>
                        <label>Порода:</label>
                        <input type="text" name="breed">
                    </div>
                    <div>
                        <label>Возраст (в месяцах):</label>
                        <input type="number" name="age" required>
                    </div>
                    <div class="modal__buttons">
                        <button type="button" class="modal__button modal__button--add">Добавить</button>
                        <button type="button" class="modal__button modal__button--cancel">Отмена</button>
                    </div>
                </form>
            </div>
        </div>`;
}



export default class ModalAddPetComponent {
    constructor() {
        this.element = null;
    }

    getTemplate() {
        return createModalAddPetComponentTemplate();
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
