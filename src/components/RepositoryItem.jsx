
// o props no caso e usado para acessar a propriedade que passamos
// para o nosso componente , que no caso e repository
export function RepositoryItem(props) {
// sempre que queremos retornar mais que uma linha de HTML
// usamos parenteses
return (

<li>
     {/* Sempre que quisermos passar um arquivo JS dentro do Html usamos chaves. */}
    {/* Caso a repository esteja vazio, passamos default para a tag strong. */}
   
    <strong>{props.repository.name ?? 'Default'}</strong>
    <p>{props.repository.description}</p>

    <a href={props.repository.link}>
        
        Acessar repositorio
    </a>
</li>

);

}