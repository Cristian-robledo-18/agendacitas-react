import React from 'react';

// Componente para favicon
const Favico: React.FC = () => {
    return <img src="./favicon.ico" alt="Favico" className="h-16" />;
};

// Componente para logo de migración
const LogoMigracion: React.FC = () => {
    return <img src=".\images\logo-migracion-colombia.png" alt="Logo Migración" className="h-18" />;
};

export { Favico, LogoMigracion }; // Exporta ambos componentes como exportaciones nombradas