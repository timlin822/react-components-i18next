import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import Select from 'components/select/Select';

import './App.css';

function App() {
  const {t,i18n}=useTranslation();
  const [language,setLanguage]=useState(localStorage.getItem("lng") || "en");
  
  const selectHandler=(e)=>{
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
		localStorage.setItem("lng",e.target.value);
	};

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <h1>{t("Hello")}</h1>
        <Select language={language} selectHandler={selectHandler} />
      </div>
    </section>
  );
}

export default App;