import React from 'react';



export default class Virement extends React.Component { 

    constructor(props)
    {
        super(props);
        this.state = { 
            montant: '',
            motif :'',
            NoComptebeneficiare :'',
            NoCompteEmetteur:'',
        };
    }

    submit=()=>{
        if(this.validateCompteBeneficiare() && this.validateCompteEmetteur() && this.validateMontant() && this.validateMotif()){
            this.sendRequest();
        }

}

 sendRequest =()=>{
  console.log('eaz');
}  

validateCompteBeneficiare =()=>{
 return this.validateCompte(this.state.NoComptebeneficiare); 
}
validateCompteEmetteur =()=>{
    return this.validateCompte(this.state.NoCompteEmetteur);
   }
validateCompte =(compte )=>{
    console.log(compte.length);
    if (compte.length ==16 ){
        return true;
    }
    return false;
}

validateMontant =( )=>{
    let montant =parseInt(this.state.montant);
    if (montant>=10 && montant<10000){
        return true;
    }
    return false;
}
validateMotif =()=>{
    if (this.state.motif.length >0){
        return true
    }
    return false;
}

  render() {
    return (
        <div>

            <input name='motif' id='motif' onChange={(event)=>{this.setState({...this.state,motif:event.target.value})}} />
            {this.validateMotif() ? null : <p id='errorMotif'>le motif ne peut pas etre vide</p> }


            <input name='montant'  id='montant' onChange={(event)=>{this.setState({...this.state,montant:event.target.value})}}/>
           {this.validateMontant()? null : <p id='errorMontant'>entrez un montant superieur à 10 et inferieur à 1000</p> }


            <input name='NoComptebeneficiare' id='NoComptebeneficiare' onChange={(event)=>{this.setState({...this.state,NoComptebeneficiare:event.target.value})}}/>
            {this.validateCompteBeneficiare() ? null : <p id='errorNoComptebeneficiare'>entrez un compte beneficiaire valide</p> }


            <input name='NoCompteEmetteur' id='NoCompteEmetteur' onChange={(event)=>{this.setState({...this.state,NoCompteEmetteur:event.target.value})}} />
            {this.validateCompteEmetteur()? null : <p id='errorNoCompteEmetteur'>entrez un compte emetteur valide</p> }


            <button type='submit' id='executerVirement' onClick={this.submit} >executer le virement</button>
        </div>

    );
  }


}