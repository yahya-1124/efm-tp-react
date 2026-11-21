import { useState } from "react";

function App() {
  const [stagiaires, setStagiaires] = useState([
    { id: 1, matricule: 1454, nom: 'Alaoui', codepostal: 20400, ville: 'casa', moyenne: 12.56 },
    { id: 2, matricule: 1455, nom: 'Mansouri', codepostal: 20400, ville: 'casa', moyenne: 14.67 }
  ]);
  const [stagiaires2, setStagiaires2] = useState([]);
  const [id, setId] = useState('');
  const [matricule, setMatricule] = useState('');
  const [nom, setNom] = useState('');
  const [ville, setVille] = useState('');
  const [codepostal, setCodepostal] = useState('');
  const [moyenne, setMoyenne] = useState('');
  const [recherche, setRecherche] = useState('');

  function ajouter() {
    if (matricule == '' || nom == '' || ville == '' || codepostal == '' || moyenne == '') {
      alert('Tous les champs sont obligatoires');
      return;
    }
    if (moyenne < 0 || moyenne > 20) {
      alert('La moyenne doit etre entre 0 et 20');
      return;
    }
    for (let i = 0; i < stagiaires.length; i++) {
      if (stagiaires[i].matricule == matricule) {
        alert('Le matricule doit etre unique');
        return;
      }
    }
    let nouveau = {
      id: id,
      matricule: Number(matricule),
      nom: nom,
      ville: ville,
      codepostal: Number(codepostal),
      moyenne:Number(moyenne)
    };
    setStagiaires([...stagiaires, nouveau]);
  }

  function supprimer() {
    setStagiaires(stagiaires.filter((s) => s.id != id));
    reset();
  }

  function modifier(s) {
      setId("");
  setMatricule("");
  setNom("");
  setVille('');
  setCodepostal('');
  setMoyenne('');

    setId(s.id);
    setMatricule(s.matricule);
    setNom(s.nom);
    setVille(s.ville);
    setCodepostal(s.codepostal);
    setMoyenne(s.moyenne);

    setStagiaires(
    stagiaires.map(function (item) {
      if (item.id == id) {
        return { id: item.id,matricule:matricule, nom: nom,ville:ville, codepostal:codepostal,moyenne:moyenne };
      }
      return item;
    })
  );
  }

  function vider() {
    setId('');
    setMatricule('');
    setNom('');
    setVille('');
    setCodepostal('');
    setMoyenne('');
  }

  function filtrer() {
    const rech = stagiaires.filter(item =>{
      return recherche == item.nom
    })
    setStagiaires2(
      rech
      
    )
  }
  function initialiser() {
    setStagiaires2([]);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Code Postal</th>
            <th>Moyenne</th>
            <th>Supprimer</th>
            <th>modifier</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.matricule}</td>
              <td>{e.nom}</td>
              <td>{e.ville}</td>
              <td>{e.codepostal}</td>
              <td>{e.moyenne}</td>
              <td><button onClick={() => supprimer(e.id)}>Supprimer</button></td>
              <td><button onClick={() => modifier(e)}>modifier</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      id : <input type="text" 
      value={id}
      placeholder="id"
      onChange={(e)=>setId(e.target.value)}/>
      <br />
      Matricule : <input type="number"
       value={matricule} 
       placeholder="matricule"
       onChange={(e)=>setMatricule(e.target.value)}/>
       <br />
      Nom : <input type="text" 
      value={nom} 
      placeholder="nom"
      onChange={(e)=>setNom(e.target.value)}/>
      <br />
      Ville : <input type="text" 
      value={ville} 
      placeholder="ville"
      onChange={(e)=>setVille(e.target.value)}/>
      <br />
      CodePostal : <input type="number" 
      value={codepostal}
      placeholder="codepostal" 
      onChange={(e)=>setCodepostal(e.target.value)} />
      <br />
      Moyenne : <input type="number" 
      value={moyenne} 
      placeholder="moyenne"
      onChange={(e)=>setMoyenne(e.target.value)}/>
      <br />
      <input type="text"
      value={recherche}
      placeholder="recherche"
      onChange={(e)=>setRecherche(e.target.value)}/>
      <br />

      <button onClick={ajouter}>Ajouter</button>
      <button onClick={vider}>vider</button>
      
      <div>
        <table>
        <tbody>
          {stagiaires2.map(e=>{
            return(
             <tr>
              <td>{e.nom}</td>
              <td>{e.ville}</td>
             </tr>
            )
          })}
        </tbody>
        </table>
        <button onClick={filtrer}>Filtrer</button>
        <button onClick={initialiser}>initialiser</button>

      </div>
    </div>
    
    
  );
}

export default App;