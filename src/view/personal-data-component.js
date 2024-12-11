import {createElement} from '../framework/render.js';

function createPersonalDataComponentTemplate() {
    return (
        `<section class="personal-data">
                <h2 class="personal_data">Личные данные</h2>
                <div class="personal-data__card">
                    
                    <div class="personal-data__info">
                        <div class="info-block">
                            <span class="label">имя</span>
                            <span class="value">Виктория</span>
                        </div>
                        <div class="info-block">
                            <span class="label">фамилия</span>
                            <span class="value">Иванова</span>
                        </div>
                        <div class="info-block">
                            <span class="label">отчество</span>
                            <span class="value">Александровна</span>
                        </div>
                        <div class="info-block">
                            <span class="label">телефон</span>
                            <span class="value">+7 999 598-12-45</span>
                        </div>
                    </div>
                    <div class="personal-data__about">
                        <span class="label">О себе</span>
                        <p>Живу в Волгограде, очень люблю животных! Мечтаю завести много зверей и построить приют. Пока что у меня собака, кошка и рыбки :)</p>
                    </div>
                </div>
            </section>`
      );
}

export default class PersonalDataComponent {
  getTemplate() {
    return createPersonalDataComponentTemplate();
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
