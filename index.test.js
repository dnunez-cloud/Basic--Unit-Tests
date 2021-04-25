import * as index from "./index.js";

describe('text Tests', () => {
  test('input Text', () => {
    expect(index.texto('Qa-automation')).toBe('Qa-automation');
  });
  test('input Number', () => {
    expect(index.texto(2)).toBe(2);
  });
  test('input Boolean', () => {
    expect(index.texto(true)).toBe(true);
  });
  test('input Array', () => {
    expect(index.texto([1,5,7,'a','b'])).toEqual([1,5,7,'a','b']);
  });
  test('input Undefined', () => {
    expect(index.texto()).toBe();
  });
});

describe('sum Tests', () => {
  test('sum Two Numbers', () => {
    expect(index.suma(2,3)).toBe(5);
  });
  test('sum Negative Numbers', () => {
    expect(index.suma(-2,-5)).toBe(-7);
  });
  test('sum Characters', () => {
    expect(index.suma('Au','tomation')).toBe('Automation');
  });
  test('sum Characters With Numbers', () => {
    expect(index.suma('A',7)).toBe('A7');
  });
  test('sum Arrays', () => {
    expect(index.suma([1,'a'],['f',2])).toEqual('1,af,2');
  });
  test('sum Undefined With Numbers', () => {
    expect(index.suma(7)).toBe(NaN);
  });
   test('sum 3 Numbers', () => {
    expect(index.suma(7,5,3)).toBe(12);
  });
});

describe('subtract Tests', () => {
  test('subtract Two Numbers', () => {
    expect(index.resta(8,3)).toBe(5);
  });
  test('subtract Booleans', () => {
    expect(index.resta(true,false)).toBe(1);
  });
  test('subtract Negative Nums', () => {
    expect(index.resta(-5,-3)).toBe(-2);
  });
  test('subtract Array With Num', () => {
    expect(index.resta(['a',2,3],3)).toBe(NaN);
  });
  test('subtract With Undefined', () => {
    expect(index.resta(3)).toBe(NaN);
  });
  test('subtract Characters', () => {
    expect(index.resta('Cars','s')).toBe(NaN);
  });
});

describe('multiplication Tests', () => {
  test('multiplication Two Numbers', () => {
    expect(index.multiplicacion(5,4)).toBe(20);
  });
  test('multiplication With Negative Numbers', () => {
    expect(index.multiplicacion(-5,-4)).toBe(20);
  });
  test('multiplication With One Negative Number', () => {
    expect(index.multiplicacion(-5,4)).toBe(-20);
  });
  test('multiplication With Strings', () => {
    expect(index.multiplicacion('Pedro','Juan')).toBe(NaN);
  });
  test('multiplication With Boolean', () => {
    expect(index.multiplicacion(2,true)).toBe(2);
  });
  test('multiplication With Undefined', () => {
    expect(index.multiplicacion(2)).toBe(NaN);
  });
});

describe('divisions Tests', () => {
  test('division by 0', () => {
    expect(index.division(9,0)).toBe('No se puede dividir por 0');
  });
  test('division 0 With Number', () => {
    expect(index.division(0,3)).toBe(0);
  });
  test('division Two Numbers', () => {
    expect(index.division(15,3)).toBe(5);
  });
  test('division With Negative Number', () => {
    expect(index.division(-15,3)).toBe(-5);
  });
  test('division Negative Numbers', () => {
    expect(index.division(-15,-3)).toBe(5);
  });
  test('division Booleans', () => {
    expect(index.division(true,false)).toBe(Infinity);
  });
  test('division Arrays', () => {
    expect(index.division(['a',1],['b',2])).toBe(NaN);
  });
});

describe('multiplication Table Tests', () => {
  test('multiplication Table Two Numbers', () => {
    expect(index.tablaMultiplicar(5,6)).toEqual([0,5,10,15,20,25,30]);
  });
  test('multiplication Table With Undefined', () => {
    expect(index.tablaMultiplicar(2)).toEqual([0,2,4,6,8,10,12,14,16,18,20]);
  });
  test('multiplication Table With Negatives', () => {
    expect(index.tablaMultiplicar(-2,-1)).toEqual([]);
  });
  test('multiplication Table With Boolean', () => {
    expect(index.tablaMultiplicar(2,false)).toEqual([0]);
  });
  test('multiplication Table With Character', () => {
    expect(index.tablaMultiplicar(2,'a')).toEqual([]);
  });
  test('multiplication Table With 3 Numbers', () => {
    expect(index.tablaMultiplicar(2,3,5)).toEqual([0,2,4,6]);
  });
});

describe('power Tests', () => {
  test('power With Two Numbers', () => {
    expect(index.potencia(3,2)).toBe(9);
  });
  test('power With one Negative', () => {
    expect(index.potencia(-3,2)).toBe(9);
  });
  test('power With Boolean', () => {
    expect(index.potencia(true,2)).toBe(1);
  });
  test('power With Undefined', () => {
    expect(index.potencia(2)).toBe(NaN);
  });
  test('power With String', () => {
    expect(index.potencia(3,'exponent')).toBe(NaN);
  });
  test('power With Array', () => {
    expect(index.potencia(3,['a',2,'b'])).toBe(NaN);
  });
});
describe('nested Tests', () => {
  test('nested With Two Numbers', () => {
    expect(index.anidada(5,3)).toBe(34);
  });
  test('nested With Negative Numbers', () => {
    expect(index.anidada(-2,-3)).toBe(13);
  });
  test('nested With 3 Numbers', () => {
    expect(index.anidada(4,3,6)).toBe(25);
  });
  test('nested With Undefined', () => {
    expect(index.anidada(3)).toBe(NaN);
  });
  test('nested With Array', () => {
    expect(index.anidada([1,2],3)).toBe(NaN);
  });
  test('nested With Boolean', () => {
    expect(index.anidada(5,true)).toBe(26);
  });
});

describe('left Zeros Tests', () => {
  test('left Zeros Happy Path', () => {
    expect(index.cerosIzq(7,3)).toBe('007');
  });
  test('left Zeros With Booleans', () => {
    expect(index.cerosIzq(true,true)).toBe('true');
  });
  test('left Zeros With Character', () => {
    expect(index.cerosIzq('a',4)).toBe('000a');
  });
  test('left Zeros Array', () => {
    expect(index.cerosIzq(['a','b','c'],3)).toBe('a,b,c');
  });
  test('left Zeros Undefined', () => {
    expect(index.cerosIzq(7)).toBe('7');
  });
  test('left Zeros With Negatives', () => {
    expect(index.cerosIzq(-5,-3)).toBe('-5');
  });
});
