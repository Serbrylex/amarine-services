import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

const imgToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
};

function obtenerFechaHoraActual2() {
    var fechaHora = new Date();
    var fecha = fechaHora.toLocaleDateString();
    var hora = fechaHora.toLocaleTimeString();
    return fecha;
}

const handlePrintPdf = async (lista) => {
    if (lista.rows.length === 0) {
        // La tabla tiene registros, no se ejecuta la función
        alert("La tabla tiene registros. No se puede descargar el PDF.");
        return;
    } else{
        var doc = new jsPDF({
            unit: 'pt',
        });
        var title = "Lista de asistencia de Amarine Services";
        var textWidth = doc.getTextWidth(title);
        // Calcula la posición central en el eje x
        var centerX = (doc.internal.pageSize.width - textWidth) / 2;
        doc.setFontSize(12);
        doc.text(title, centerX + 25, 75); // Centrar solo el título

        var fechaHoraActual = obtenerFechaHoraActual2();
        var imageURL = '/images/amarineLogo.jpg';

        // Cargar la imagen utilizando una promesa
        const image = await imgToBase64(imageURL)

        // Header section
        doc.addImage(image, 'PNG', 200, 10, 170, 50)

        // Definir las columnas de la tabla en el PDF
        var columnasPDF = ["ID", "Nombre", "Apellidos", "¿Asistió?", "Fecha y hora registrada"];

        // Establecer la posición vertical para la tabla
        var tableY = 95; // Posición vertical de la tabla
        const body = lista.rows.map(data => data.data)
        // Agregar el encabezado de la tabla al PDF
        autoTable(doc,{
            columnStyles:{
                0:{halign: 'center', fontSize:8},
                1:{halign: 'center', fontSize:8},
                2:{halign: 'center', fontSize:8},
                3:{halign: 'center', fontSize:8},
                4:{halign: 'center', fontSize:8},
                5:{halign: 'center', fontSize:8},
                6:{halign: 'center', fontSize:8},
                7:{halign: 'center', fontSize:8},
                8:{halign: 'center', fontSize:8},
                9:{halign: 'center', fontSize:8},
            }
        ,columns: lista.colums, body, startY: tableY})

        doc.save("tabla.pdf")
    }
}

export default handlePrintPdf