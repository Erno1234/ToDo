import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
  #LISTA = [];
  #szuloElem;
  constructor(LISTA, SZULOELEM) {
    this.#LISTA = LISTA;
    this.#szuloElem = SZULOELEM;
    this.#szuloElem.append('<table class="table table-bordered table stripped">');
    this.tablaElem = this.#szuloElem.children("table");
    for (let index = 0; index < this.#LISTA.length; index++) {
        new MegjelenitSor(this.#LISTA[index],this.tablaElem)
    }
  }
}
export default Megjelenit;
