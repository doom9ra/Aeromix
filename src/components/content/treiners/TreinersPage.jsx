// react
import React from 'react'
// route
import { useParams } from "react-router-dom"
//components (carousel)
import TreinersCarousel from '@treiners/treinersCarousel/TreinersCarousel.jsx';
// components (treiners)
import VasilcovaViktoria from '@components/content/treiners/vasilcovaViktoria/VasilcovaViktoria.jsx'
import KarinaAhmedova from '@components/content/treiners/karinaAhmedova/KarinaAhmedova.jsx'
import ZasipkinaJanna from '@components/content/treiners/zasipkinaJanna/ZasipkinaJanna.jsx'
import TatianaAnohina from '@components/content/treiners/tatianaAnohina/TatianaAnohina.jsx'
import BojkovaKristina from '@components/content/treiners/bojkovaKristina/BojkovaKristina.jsx'
import EkaterinaKashinceva from '@components/content/treiners/ekaterinaKashinceva/EkaterinaKashinceva.jsx'
import AnnaRomanova from '@components/content/treiners/annaRomanova/AnnaRomanova.jsx'
// styles
import './treinersPage.scss'


export default function TreinersPage() {

    const currentTreiner = useParams();

	return (
        <section className="treinersPage">
            {currentTreiner.name === "vasilcovaViktoria" && <VasilcovaViktoria />}
            {currentTreiner.name === "karinaAhmedova" && <KarinaAhmedova />}
            {currentTreiner.name === "zasipkinaJanna" && <ZasipkinaJanna />}
            {currentTreiner.name === "ekaterinaKashinceva" && <EkaterinaKashinceva />}
            {currentTreiner.name === "tatianaAnohina" && <TatianaAnohina />}
            {currentTreiner.name === "bojkovaKristina" && <BojkovaKristina />}
            {currentTreiner.name === "annaRomanova" && <AnnaRomanova />}
            <TreinersCarousel />
        </section>
	)
}