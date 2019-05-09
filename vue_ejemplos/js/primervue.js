const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Hola mundo pero con Vue',
		frutas: ['Manzana','Uva','Peras','Fresas'],
		frutas2: [
			{nombre:'Manzana',cantidad: 11},
			{nombre:'Uva',cantidad: 0},
			{nombre:'Peras',cantidad: 80},
			{nombre:'Fresas',cantidad: 110}
		],
		nuevaFruta: '',
		total: 0
	},
	methods: {
		agregarFruta(){
			//console.log("diste clic");
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta,
				cantidad: 0
			});
			this.nuevaFruta = '';
		}
	},
	computed: {
		sumarFrutas(){
			this.total = 0; 
			for(fruta of this.frutas2){
				this.total = this.total+fruta.cantidad;
			}
			return this.total;
		}
	}
});



























