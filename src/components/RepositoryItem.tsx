// aqui passarmeos a typagem pro nosso componente, que no caso é o props.

interface RepositoryItemProps {
repository : {
    name: string;
    description : string;
    html_url : string;
}
}
// o props no caso e usado para acessar a propriedade que passamos
// para o nosso componente , que no caso e repository
export function RepositoryItem(props : RepositoryItemProps) {
// sempre que queremos retornar mais que uma linha de HTML
// usamos parenteses
return (

<li>
     {/* Sempre que quisermos passar um arquivo JS dentro do Html usamos chaves. */}
    {/* Caso a repository esteja vazio, passamos default para a tag strong. */}
   
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>

    <a href={props.repository.html_url}>
        
        Acessar repositorio
    </a>
</li>

);

}