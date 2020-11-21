import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from '../images//mapMarker.svg';
import { useHistory } from "react-router-dom";
import '../sytles/components/Slidebar.css';
export default function Slidebar(){
    const { goBack } = useHistory();
    return(
      
        <aside className="app-sidebar">

        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}