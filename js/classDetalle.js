export default class Servicio {
    #id;
    #servicioNombre;
    #profesor;
    #imagen;
    #socialProf;
    #precio;
    #tiempo;
    #categoria;
    #descripcion;
    #calificacion;
    constructor(id = uuidv4(), servicioNombre, profesor, imagen, socialProf, precio, tiempo, categoria, descripcion) {
        this.#id = id;
        this.#servicioNombre = servicioNombre;
        this.#profesor = profesor;
        this.#imagen = imagen;
        this.#socialProf = socialProf;
        this.#precio = precio;
        this.#tiempo = tiempo;
        this.#categoria = categoria;
        this.#descripcion = descripcion;
        this.#calificacion = calificacion;
    }
    getId() {
        return this.#id;
    }

    getServicioNombre() {
        return this.#servicioNombre;
    }

    getProfesor() {
        return this.#profesor;
    }

    getImagen() {
        return this.#imagen;
    }

    getSocialProf() {
        return this.#socialProf;
    }

    getPrecio() {
        return this.#precio;
    }

    getTiempo() {
        return this.#tiempo;
    }

    getCategoria() {
        return this.#categoria;
    }

    getDescripcion() {
        return this.#descripcion;
    }

    getCalifcacion(){
        return this.#calificacion;
    }
    // Setters
    setId(id) {
        this.#id = id;
    }

    setServicioNombre(servicioNombre) {
        this.#servicioNombre = servicioNombre;
    }

    setProfesor(profesor) {
        this.#profesor = profesor;
    }

    setImagen(imagen) {
        this.#imagen = imagen;
    }

    setSocialProf(socialProf) {
        this.#socialProf = socialProf;
    }

    setPrecio(precio) {
        this.#precio = precio;
    }

    setTiempo(tiempo) {
        this.#tiempo = tiempo;
    }

    setCategoria(categoria) {
        this.#categoria = categoria;
    }

    setDescripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    setCalificacion(calificacion){
        this.#calificacion=calificacion;
    }
    toJason() {
        return {
            id: this.id,
            servicioNombre: this.servicioNombre,
            profesor: this.profesor,
            imagen: this.imagen,
            socialProf: this.socialProf,
            precio: this.precio,
            tiempo: this.tiempo,
            categoria: this.categoria,
            descripcion: this.descripcion,

        }
    }
}
