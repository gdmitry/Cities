const List = props => (
    <ui>
    {props.cities.map((city, index) => <li key={index}>{city.name}</li>)}
    </ui>
);

export default List;