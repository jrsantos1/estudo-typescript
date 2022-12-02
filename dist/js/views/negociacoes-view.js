export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
        console.log(this.elemento);
    }
    template() {
        console.log('template');
        return `
           <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr> 
                    <th> DATA </th>
                    <th> QUANTIDADE </th>
                    <th> VALOR </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
           </table>
                `;
    }
    update() {
        console.log('update');
        this.elemento.innerHTML = this.template();
    }
}
