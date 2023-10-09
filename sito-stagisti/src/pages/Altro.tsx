import file from '../texts/Altro.json'
import Step from '../components/Step'

const Altro = () => {

    //Tolgo il counter perchè questa è una pagina che contiene informazioni frammentate

  return (
    file.map((step) => {
      return <>
        <Step title={step.title} body={step.body} />
      </>
    })
  );
};

export default Altro;
