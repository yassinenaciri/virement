import React from "react";
import Enzyme , {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Virement from "./virement";

import {jest} from '@jest/globals';


Enzyme.configure({adapter : new Adapter()});

describe('VirementTest',()=>{
    it('should send request ',()=>{
        const app =shallow( < Virement />);
        const submitBtn = app.find('#executerVirement');
        const montantInput = app.find('#montant');
        const errorMontant = app.find('#errorMontant');
        montantInput.simulate("10");
        expect(montantInput.text()).toBe('');
    })
})