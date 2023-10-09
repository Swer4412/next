import file from '../texts/Curiosita.json'
import Step from '../components/Step'

const Errori = () => {

    //Tolgo il counter perchè questa è una pagina che contiene informazioni frammentate

  return (
    file.map((step) => {
      return <>
        <Step title={step.title} body={step.body} />
      </>
    })
  );
};

export default Errori;
