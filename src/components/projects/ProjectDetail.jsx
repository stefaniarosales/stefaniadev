import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
    const { id } = useParams();

    return (
        <div>
        <h1>Detalles del proyecto {id}</h1>
        {/* Aquí puedes agregar más información específica del proyecto */}
        </div>
    );
}

export default ProjectDetail;