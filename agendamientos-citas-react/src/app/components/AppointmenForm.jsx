import React, { useState } from 'react';

const AppointmentForm = () => {
    const [city, setCity] = useState('');
    const [tramite, setTramite] = useState('');
    const [fecha, setFecha] = useState('');
    const [horasDisponibles, setHorasDisponibles] = useState([]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
        // Aquí puedes agregar la lógica para obtener las horas disponibles según la ciudad seleccionada
    };

    const handleTramiteChange = (event) => {
        setTramite(event.target.value);
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
        // Aquí puedes agregar la lógica para obtener las horas disponibles según la fecha seleccionada
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    return (
        <form id="consulta-form" className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad:</label>
                <select id="city" name="city" value={city} onChange={handleCityChange} 
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" required>
                    <option value="">Seleccione una ciudad</option>
                    <option value="ARAUCA">ARAUCA</option>
                    <option value="ARMENIA">ARMENIA</option>
                    <option value="BARRANQUILLA">BARRANQUILLA</option>
                    <option value="BOGOTA DC">BOGOTÁ DC</option>
                    <option value="BUCARAMANGA">BUCARAMANGA</option>
                    <option value="BUENAVENTURA">BUENAVENTURA</option>
                    <option value="CALI">CALI</option>
                    <option value="CARTAGENA DE INDIAS">CARTAGENA DE INDIAS</option>
                    <option value="CÚCUTA">CÚCUTA</option>
                    <option value="IBAGUÉ">IBAGUÉ</option>
                    <option value="INIRIDA">INIRIDA</option>
                    <option value="LETICIA">LETICIA</option>
                    <option value="MAICAO">MAICAO</option>
                    <option value="MANIZALES">MANIZALES</option>
                    <option value="MEDELLIN">MEDELLÍN</option>
                    <option value="MONTERÍA">MONTERÍA</option>
                    <option value="NEIVA">NEIVA</option>
                    <option value="PASTO">PASTO</option>
                    <option value="PEREIRA">PEREIRA</option>
                    <option value="POPAYÁN">POPAYÁN</option>
                    <option value="PROVIDENCIA Y SANTA CATALINA">PROVIDENCIA Y SANTA CATALINA</option>
                    <option value="PUERTO CARREÑO">PUERTO CARREÑO</option>
                    <option value="PUERTO LEGUÍZAMO">PUERTO LEGUÍZAMO</option>
                    <option value="QUIBDÓ">QUIBDÓ</option>
                    <option value="RIOHACHA">RIOHACHA</option>
                    <option value="RUMICHACA">RUMICHACA</option>
                    <option value="SAN ANDRÉS">SAN ANDRÉS</option>
                    <option value="SANTA MARTA">SANTA MARTA</option>
                    <option value="SINCELEJO">SINCELEJO</option>
                    <option value="TUMACO">TUMACO</option>
                    <option value="TUNJA">TUNJA</option>
                    <option value="VALLEDUPAR">VALLEDUPAR</option>
                    <option value="VILLAVICENCIO">VILLAVICENCIO</option>
                    <option value="YOPAL">YOPAL</option>
                </select>
            </div>
            <div>
                <label htmlFor="tramite" className="block text-sm font-medium text-gray-700">Trámite:</label>
                <select id="tramite" name="tramite" value={tramite} onChange={handleTramiteChange} 
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" required>
                    <option value="">Seleccione un trámite</option>
                    <option value="ATENCIÓN SIRE">ATENCIÓN SIRE</option>
                    <option value="CÉDULA DE EXTRANJERÍA">CÉDULA DE EXTRANJERÍA</option>
                    <option value="CERTIFICADO DE MOVIMIENTOS MIGRATORIOS">CERTIFICADO DE MOVIMIENTOS MIGRATORIOS</option>
                    <option value="DUPLICADO PPT - PÉRDIDA - HURTO">DUPLICADO PPT - PÉRDIDA - HURTO</option>
                    <option value="PROCESO ADMINISTRATIVO - PERSONA NATURAL">PROCESO ADMINISTRATIVO PERSONA NATURAL O JURÍDICA</option>
                    <option value="REEXPEDICIÓN DE PPT - CORRECCIÓN INFORMACIÓN">REEXPEDICIÓN DE PPT - CORRECCIÓN INFORMACIÓN</option>
                    <option value="REGISTRO DE VISA">REGISTRO DE VISA</option>
                    <option value="SALVOCONDUCTO">SALVOCONDUCTO</option>
                </select>
            </div>
            <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha de la cita:</label>
                <input id="fecha" type="text" value={fecha} onChange={handleFechaChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="Seleccione una fecha" required />
            </div>
            <button type="submit"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Consultar cita</button>
        </form>
    );
};

export default AppointmentForm;