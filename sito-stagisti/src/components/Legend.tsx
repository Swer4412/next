type legendProps = {
    counter: number,
    title: string,
}

//Boh spero che un giorno possa essere così intelligente da implementare questa funzione

const Legend = ( {title, counter}: legendProps) => {
    
    const url = "#" + title
    
    return ( 
        <a href={url} className="">{counter}) {title}</a>
    );
};

export default Legend;