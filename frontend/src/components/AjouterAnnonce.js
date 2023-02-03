import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import './AjouterAnnonce.css'
export default function AjouterAnnonce() {
    const [type, setType] = useState('');
    const [categorie, setCategorie] = useState('');
    const [surface , setSurface]=useState('');
    const [prix, setPrix] = useState('');
    const [description, setDescription] = useState('');
    const [titre, setTitre] = useState('');
    const [wilaya, setWilaya] = useState('');
    const [commune, setCommune] = useState('');
    const [adresse, setAdresse] = useState('');
    const[photo, setPhoto] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(type);
    }
  return (
    <div className='containerAI'>
      <div className='grid-containerAI'>
       <div className='colonne-2AI'> 
       <Link to='/profil'> <i className='fa fa-user'></i></Link> 
         <h2> les informations du bien </h2> 
         <form className="register-formAI" onSubmit={handleSubmit}>
           <label>le titre de l'annonce:</label>
           <input className='user-input' value={titre} name="titre" onChange={(e) => setTitre(e.target.value)} placeholder="titre" />
           <label>la description :</label>
           <input className='user-input' value={description} name="description" onChange={(e) => setDescription(e.target.value)}  placeholder="description" />
           <label>le prix du bien:</label>
           <input className='user-input'  value={prix}  onChange={(e) => setPrix(e.target.value)} placeholder="prix"  />
           <label>le surface du bien:</label>
           <input className='user-input'  value={surface} onChange={(e) => surface(e.target.value)} placeholder="surface"  />
           <label>le type du bien:</label>
           <select  className='user-input'  value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Terraint">Terrain</option>
            <option value="Terrain agricole">Terrain agricole</option>
            <option selected value="Appartement">Appartement</option>
            <option value="Maison">Maison</option>
            <option value=" Bungalow"> Bungalow</option>
           </select>
           <label>la catégorie du bien:</label>
           <select   className='user-input' value={categorie}onChange={(e) => setCategorie(e.target.value)}>
            <option value="vente">vente</option>
            <option value="echange">échange</option>
            <option selected value="location">location</option>
            <option value="location pour les vacanaces">location pour les vacances</option>
           </select>
           <label>La wilaya du bien:</label>
           <input className='user-input'  value={wilaya} onChange={(e) => setWilaya(e.target.value)} placeholder="wilaya"  />
           <label>La commune du bien:</label>
           <input className='user-input'  value={commune} onChange={(e) => setCommune(e.target.value)} placeholder="commune"  />
           <label>L'adresse du bien:</label>
           <input className='user-input' value={adresse} onChange={(e) => setAdresse(e.target.value)}  placeholder="adresse"   />
          <Link to="/"><button type="submit" className='submitBTNAI'>valider</button></Link> 
       </form>
       </div>
    </div>
  </div>
  )
}
