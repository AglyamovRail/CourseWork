import {createElement} from '../framework/render.js';

function createPetsAddComponentTemplate() {
    return (
        `<section class="pets-data">
            <h2 class="my_pets">Мои питомцы</h2>
            <div class="add_new_pets">
                <img class="pets__img" src="images/pets.png">
                <h1 class="add">ДОБАВИТЬ НОВОГО ПИТОМЦА</h1>
            </div>
        </section>`
      );
}

export default class PetsAddComponent {
  getTemplate() {
    return createPetsAddComponentTemplate();
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
}