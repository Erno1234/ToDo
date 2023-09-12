class MegjelenitSor {
  #obj = {};
  #szuloElem;
  constructor(obj, szuloelem) {
    this.#obj = obj;
    this.#szuloElem = szuloelem;
    this.#sor();
    this.sorElem = this.#szuloElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.megseElem = this.sorElem.children("td").children(".megse");
    this.torlesElem = this.sorElem.children("td").children(".kuka");

    this.keszElem.on("click", () => {
      this.sorElem.css("background-color", "green");
      this.#esemenyTrigger("kesz");
    });

    this.megseElem.on("click", () => {
      this.sorElem.css("background-color", "white");
    });

    this.torlesElem.on("click", () => {
        this.sorElem.remove();
    });

  }
  #sor() {
    let txt;
    txt += `<tr>`;
    for (let key in this.#obj) {
      txt += `<td> ${this.#obj[key]}</td>`;
    }
    txt += `<td><span class="kesz">✅</span><span class="megse">❌</span><span class="kuka">🗑</span>`;
    txt += `</tr>`;
    this.#szuloElem.append(txt);
  }
  #esemenyTrigger(mainKiir) {
    const esemeny = new CustomEvent(mainKiir, {detail:this})
    window.dispatchEvent(esemeny);
  }
}
export default MegjelenitSor;
