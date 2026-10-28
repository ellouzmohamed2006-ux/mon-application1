const produits = [
   {id : 1 , Nom : 'clavier' , categorie : 'accessoires' , prix : 120 , stock : 5 }, 
{id : 2 , Nom : 'souris' , categorie : 'accessoires' , prix : 80, stock : 8 },
{id : 3 , Nom : 'Ecran' , categorie : 'informatique' , prix : 900, stock : 0 },
{id : 4 , Nom : 'casque' , categorie : 'accessoires' , prix : 240, stock : 3 },
];
for (let i=0 ; i<4 ;i++){
    console.log( 'nom : '+ produits[i].Nom +' prix : '+ produits[i].prix );
}
const commande = [
   {id : 1 , Nom : 'clavier' , categorie : 'accessoires' , prix : 120 , stock : 5 }, 
{id : 2 , Nom : 'souris' , categorie : 'accessoires' , prix : 80, stock : 8 },
{id : 4 , Nom : 'casque' , categorie : 'accessoires' , prix : 240, stock : 3 },
];
console.log ('le nombre de produis diponible est :' + commande.length)
const Somme=produits.reduce(
    (totale,p)=> totale+p.prix * p.stock ,0 );
    console.log('la somme est : '+Somme);
    let moins;
     moins=produits[0].prix;
    let nommoins=produits[0].Nom;
    for(let i =1;i<4 ;i++){
       
        if (produits[0].prix>produits[i].prix){
            moins=produits[i].prix;
            nommoins = produits[i].Nom;
} }
    console.log('le produit moins cher est :'+ nommoins + ' de prix' + moins)
 
