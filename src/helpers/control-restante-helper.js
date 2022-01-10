export const determinarClase = (restante, presupuesto) => {
    var claseAlerta = "";
    //determinando clase del elemento que muestra el restante
    /**
     * mas del 75 --> success
     * <75 y >50 --> warning
     * <25 --> danger
     */
    if (restante > presupuesto * 0.5) {
        if (restante > presupuesto * 0.75) {
            claseAlerta = "alert alert-success";
        } else {
            claseAlerta = "alert alert-warning";
        }
    } else {
        claseAlerta = "alert alert-danger";
        if (restante === 0) {
            claseAlerta = "alert alert-empty";
        }
    }

    return claseAlerta;
}