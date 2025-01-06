import React , {useState} from 'react'; 
import { Button } from 'primereact/button';
import { CRUD_digimoncomponent } from './CRUD_digimoncomponent';
import '../Style/Style_menu.css'

export function Menu (){
    const [currentComponent, setCurrentComponent] = useState('CRUD_digimoncomponent');

    const hadleComponentChange = (component) => {
        setCurrentComponent(component);
    }

    return(
        <>
            <nav>
                <div>
                <Button label="Digimon" onClick={() => hadleComponentChange('Digimon')} severity="help"/>
                <Button label="Pokemom" severity="help"/>
                <Button label="Yu-Gi-Oh!" severity="help"/>
                </div>
            </nav>
    <div>
        {currentComponent === 'Digimon' && <CRUD_digimoncomponent/>}
    </div>
        </>
    )
}
