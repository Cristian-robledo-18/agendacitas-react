import React from 'react';
import { LogoMigracion } from './Images'; // Importa el componente LogoMigracion

const WelcomeModal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Bienvenido
                        </h3>
                        <button onClick={onClose} type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Cerrar modal</span>
                        </button>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex justify-center">
                            <LogoMigracion /> {/* Usa el componente LogoMigracion */}
                        </div>
                        <p className="text-base leading-relaxed text-gray-500">
                            ATENCIÓN: El agendamiento de citas en los Centros Facilitadores de Servicios Migratorios y Puestos de Control Migratorio,
                            aplica solo para personas naturales y para personas jurídicas en procesos administrativos.
                            <br /><br />
                            No se prestará atención si los datos del ciudadano o la persona jurídica no concuerdan con la cita agendada.
                            La confirmación de su cita se enviará al correo electrónico.
                        </p>
                    </div>
                    <div className="flex items-center p-4 border-t">
                        <button onClick={onClose} type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;