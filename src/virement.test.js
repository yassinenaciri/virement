import React from "react";
import Enzyme , {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Virement from "./virement";
import ReactTestUtils from 'react-dom/test-utils';
import {jest} from '@jest/globals';


Enzyme.configure({adapter : new Adapter()});

describe('VirementTest',()=>{

    it("elements should mount",()=>{
        const app =shallow( < Virement />);
        app.find('#executerVirement');
        app.find('#montant');
        app.find('#NoComptebeneficiare');
        app.find('#motif');
        app.find('#NoCompteEmetteur');

    },
    it('should send request ',()=>{
        const app =shallow( < Virement />);
        const submitBtn = app.find('#executerVirement');
        const montantInput = app.find('#montant');
        const motifInput = app.find('#motif');
        const NoComptebeneficiareInput = app.find('#NoComptebeneficiare');
        const NoCompteEmetteurInput = app.find('#NoCompteEmetteur');
        montantInput.simulate('change', {
            target: {
                name: 'montant',
                value:'10'
            },
          });
          motifInput.simulate('change', {
            target: {
                name: 'motif',
                value:'mon motif valide'
            },
          });
          NoComptebeneficiareInput.simulate('change', {
            target: {
                name: 'NoComptebeneficiare',
                value:'1111111111111111'
            },
          });
          NoCompteEmetteurInput.simulate('change', {
            target: {
                name: 'NoCompteEmetteur',
                value:'2222222222222222'
            },
          });

        const instance = app.instance()
        const spy = jest.spyOn(instance, 'sendRequest')
        submitBtn.simulate('click');
        expect(spy).toHaveBeenCalled();
    })
    ,



    it('compte beneficiaire input test ',()=>{
        const app =shallow( < Virement />);
        const submitBtn = app.find('#executerVirement');
        const NoComptebeneficiareInput = app.find('#NoComptebeneficiare');
       
        NoComptebeneficiareInput.simulate('change', {
            target: {
                name: 'NoComptebeneficiare',
                value:'111111111'
            },
          });
        
         expect(app.find('#errorNoComptebeneficiare').length).toEqual(1);
        const errorMontant = app.find('#errorNoComptebeneficiare');
        expect(errorMontant.text()).toBe('entrez un compte beneficiaire valide')

        NoComptebeneficiareInput.simulate('change', {
            target: {
                name: 'NoComptebeneficiare',
                value:'1111111111111111'
            },
          });
        expect(app.find('#errorNoComptebeneficiare').length).toEqual(0);
    }),

    
    it('compte emetteur input test ',()=>{
        const app =shallow( < Virement />);
        const submitBtn = app.find('#executerVirement');
        const NoCompteEmetteurInput = app.find('#NoCompteEmetteur');
       
        NoCompteEmetteurInput.simulate('change', {
            target: {
                name: 'NoCompteEmetteur',
                value:'111111111'
            },
          });
        
         expect(app.find('#errorNoCompteEmetteur').length).toEqual(1);
        const errorMontant = app.find('#errorNoCompteEmetteur');
        expect(errorMontant.text()).toBe('entrez un compte emetteur valide')

        NoCompteEmetteurInput.simulate('change', {
            target: {
                name: 'NoCompteEmetteur',
                value:'1111111111111111'
            },
          });
        expect(app.find('#errorNoCompteEmetteur').length).toEqual(0);
    })

    ,
    
    
    it('motif input test ',()=>{
        const app =shallow( < Virement />);
        const submitBtn = app.find('#executerVirement');
        const montantInput = app.find('#motif');
       
        montantInput.simulate('change', {
            target: {
                name: 'motif',
                value:''
            },
          });
        expect(app.find('#errorMontant').length).toEqual(1);
        const errorMontant = app.find('#errorMotif');
        expect(errorMontant.text()).toBe('le motif ne peut pas etre vide')

        montantInput.simulate('change', {
            target: {
                name: 'motif',
                value:'monMotif'
            },
          });
        expect(app.find('#errorMotif').length).toEqual(0);

    }),


    it('montant input test ',()=>{
        const app =shallow( < Virement />);
        const submitBtn = app.find('#executerVirement');
        const montantInput = app.find('#montant');
       
        montantInput.simulate('change', {
            target: {
                name: 'montant',
                value:'9'
            },
          });
        expect(app.find('#errorMontant').length).toEqual(1);
        const errorMontant = app.find('#errorMontant');
        expect(errorMontant.text()).toBe('entrez un montant superieur à 10 et inferieur à 1000')

        montantInput.simulate('change', {
            target: {
                name: 'montant',
                value:'10'
            },
          });
        expect(app.find('#errorMontant').length).toEqual(0);
    }))
})