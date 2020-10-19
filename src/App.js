
import React from 'react';
import Component from'./profile/component.js'
import Image from './Hichem_Mechichi.jpg'


function App() {
  Component.defaultProps={fullName:"Hichem Mechichi" , 
  bio:"(Arabic: هشام المشيشي‎; born January 1974) is the Prime Minister of Tunisia, since 2020. He held the post of Minister of the Interior in 2020 before being appointed head of government.He was a member of the National Commission of Investigation on Corruption and Embezzlement, founded in 2011 and chaired by Abdelfattah Amor. In 2014, he was appointed Chief of Staff at the Ministry of Transport, then the same post successively at the ministries of Social Affairs and Public Health.He was then Director General of the National Agency for the Sanitary and Environmental Control of Products.Appointed by President Kaïs Saïed as his first adviser in charge of Legal Affairs, on February 11, 2020, he was appointed on the 27 of the same month as Minister of the Interior in the government of Elyes Fakhfakh.On July 25, 2020, in the midst of a political crisis, Saïed appointed him head of government, with the task of forming a government in one month and obtaining the confidence of the Assembly of the Representatives of the People. Later on, he assumed office on 2 September 2020.",
  pic:Image
  }
  return (
    <div className="App">
      <Component  />
    </div>
  );
}

export default App;
