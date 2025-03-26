'use client';

import React, { useState } from 'react';
import AppointmentForm from './components/AppointmenForm';
import WelcomeModal from './components/WelcomeModal';
import { Favico, LogoMigracion } from './components/Images'; // Importa ambos componentes
import Calendar from './components/Calendar'; // Importa el componente Calendar

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [selectedDate, setSelectedDate] = useState<string>(''); // Estado para la fecha seleccionada

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };

    const handleDateChange = (date: string): void => {
        console.log('Fecha seleccionada:', date);
        setSelectedDate(date);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Modal de bienvenida */}
            <WelcomeModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="container mx-auto p-4">
             
              
                {/* Calendario */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Selecciona una fecha:</h2>
                    <Calendar onDateChange={handleDateChange} />
                    {selectedDate && <p className="mt-4">Fecha seleccionadas: {selectedDate}</p>}
                </div>
                {/* Formulario de citas */}
                <AppointmentForm />
            </div>
        </div>
    );
};

export default App;