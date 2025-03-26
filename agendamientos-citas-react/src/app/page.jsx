'use client';

import React, { useState } from 'react';
import AppointmentForm from './components/AppointmenForm.jsx';
import WelcomeModal from './components/WelcomeModal.jsx';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <WelcomeModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="container mx-auto p-4">
                <AppointmentForm />
            </div>
        </div>
    );
};

export default App;