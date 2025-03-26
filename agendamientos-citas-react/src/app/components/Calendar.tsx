import React, { useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

interface CalendarProps {
    onDateChange: (date: string) => void; // Función para manejar el cambio de fecha
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange }) => {
    useEffect(() => {
        const dateInput = document.getElementById('fecha') as HTMLInputElement;

        flatpickr(dateInput, {
            dateFormat: 'Y-m-d',
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)), // Mínimo un día después de la fecha actual
            altInput: true,
            altFormat: 'F j, Y',
            disable: [
                function (date) {
                    // Deshabilitar sábados (6) y domingos (0)
                    if (date.getDay() === 0 || date.getDay() === 6) {
                        return true;
                    }

                    // Obtener la fecha actual
                    const today = new Date();
                    // Obtener el primer día de la semana (lunes)
                    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
                    // Obtener el último día de la semana (viernes)
                    const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 5));
                    // Deshabilitar fechas fuera de la semana actual
                    return date < firstDayOfWeek || date > lastDayOfWeek;
                },
            ],
            onChange: (selectedDates) => {
                if (selectedDates.length > 0) {
                    onDateChange(selectedDates[0].toISOString().split('T')[0]); // Devuelve la fecha seleccionada en formato 'YYYY-MM-DD'
                }
            },
        });
    }, [onDateChange]);

    return (
        <input
            id="fecha"
            type="text"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            placeholder="Seleccione una fecha"
        />
    );
};

export default Calendar;