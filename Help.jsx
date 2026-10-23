import "./Help.css";
function Help() {
  return (
    <aside className="quick-help">
      <div className="quick-help-heading">
        <h2>Aide rapide</h2>
        <span>v1.1</span>
      </div>
      <p>• Cliquez sur Créer une nouvelle recette pour ouvrir le formulaire.</p>
      <p>• Pagination numérotée en bas de la liste</p>
      <p>• Utilisez Supprimer pour retirer une recette de la liste.</p>
    </aside>
  );
}

export default Help;
