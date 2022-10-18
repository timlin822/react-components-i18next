import {FaGlobe} from 'react-icons/fa';

import LANGUAGES_DATA from 'data/LanguagesData';

import './Select.css';

const Select=({language,selectHandler})=>{
    return (
        <div className="language">
            <FaGlobe className="global-icon" />
            <select className="select" name="language" value={language} onChange={selectHandler}>
                {LANGUAGES_DATA.map(language=>(
                    <option key={language.id} value={language.code}>{language.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;