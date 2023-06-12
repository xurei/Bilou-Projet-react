import '../../styles/fiche.scss'
import Collapse from '../Collapse'
import etoile_pleine from '../../assets/etoile_pleine.png'
import etoile_transparente from '../../assets/etoile_transparente.png'


function Fiche({ title, description, tags, location, equipments, rating }) {

    

    return (
        <div className="fiche">
            
            <h2>{title}</h2>
            <span>{location}</span>
            <ul className='tags__liste'>
                {tags.map((tagsName) => (
                    <li className='tags__liste--li' key={tagsName}>{ tagsName }</li>
                ))}
            </ul>
            <div className='collapse__globaldiv'>
                <Collapse>
                    <p className='collapse__description'>{description}</p>
                </Collapse>
                <Collapse>
                    <ul className='collapse__equipment'>{equipments.map((equipment) => (
                        <li key={equipment}>{ equipment }</li>
                    ))}</ul>
                </Collapse>
            </div>
            
            
            <span>{equipments}</span>  
            <span>{rating > 0 ? <span>{rating*etoile_pleine}</span> : <span>{rating*etoile_transparente}</span>}</span>         
            <br/>
        </div>
    )
}
 
export default Fiche