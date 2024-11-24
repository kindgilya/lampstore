class Filter {
    _element = null;
    _subElements = null;
  
    constructor({filterCategories}) {
        this._filterCategories = filterCategories;
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
    }
  
    _getSubElements() {
      return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
        return {
          ...acc,
          [elem.getAttribute("data-element")]: elem,
        };
      }, {});
    }
  
    _getTemplate(){
        return `<form class="filters" method="post" action="#">
          <div class="fiters__input">
            <div class="filter">
              <h2 class="filter__title">Цена</h2>
              <div class="filter__content">
                <div class="filter-field-group">
                  <label class="form-control-label">От</label>
                  <input class="form-control-field" type="text" placeholder="997" />
                </div>
                <div class="filter-field-group">
                  <label class="form-control-label">До</label>
                  <input class="form-control-field" type="text" placeholder="1148" />
                </div>
              </div>
            </div>
            <div class="filter">
              <h2 class="filter__title">Ширина</h2>
              <div class="filter__content">
                <div class="filter-field-group">
                  <label class="form-control-label">От</label>
                  <input type="text" placeholder="12.5" />
                </div>
                <div class="filter-field-group">
                  <label class="form-control-label">До</label>
                  <input type="text" placeholder="15.5" />
                </div>
              </div>
            </div>

            <div class="filter">
              <h2 class="filter__title">Высота</h2>
              <div class="filter__content">
                <div class="filter-field-group">
                  <label class="form-control-label">От</label>
                  <input type="text" placeholder="43" />
                </div>
                <div class="filter-field-group">
                  <label class="form-control-label">До</label>
                  <input type="text" placeholder="150" />
                </div>
              </div>
            </div>

            <div class="filter">
              <h2 class="filter__title">Вес</h2>
              <div class="filter__content">
                <div class="filter-field-group">
                  <label class="form-control-label">От</label>
                  <input type="text" placeholder="1249" />
                </div>
                <div class="filter-field-group">
                  <label class="form-control-label">До</label>
                  <input type="text" placeholder="2449" />
                </div>
              </div>
            </div>
          </div>

          <div class="fiters__bottom">
            <div class="filter">
              <h2 class="filter__title">Напряжение</h2>
              <select class="filter-voltage">
                <option>Пункт 1</option>
                <option>Пункт 2</option>
                <option>Пункт 3</option>
                <option>Пункт 4</option>
                <option>Пункт 5</option>
              </select>
            </div>
            <div class="filter">
              <h2 class="filter__title">Источник питания</h2>
              <select class="filter-power">
                <option>Пункт 1</option>
                <option>Пункт 2</option>
                <option>Пункт 3</option>
                <option>Пункт 4</option>
                <option>Пункт 5</option>
              </select>
            </div>
            <div class="filter">
              <h2 class="filter__title">Температура свечения</h2>
              <select class="filter-light">
                <option>Пункт 1</option>
                <option>Пункт 2</option>
                <option>Пункт 3</option>
                <option>Пункт 4</option>
                <option>Пункт 5</option>
              </select>
            </div>
          </div>
        </form>`
    }
  
    get element() {
      return this._element;
    }
    }