/* eslint-disable symbol-description */
function uniqueSymbol() {
  const desc = 'just a description';
  const a = Symbol(desc);
  const b = Symbol(desc);
  const c = Symbol();
  const d = Symbol();
  console.log(a === b);
  console.log(c === d);
}
uniqueSymbol();

// 魔术字符串
function normalCoupled() {
  function getArea(shape, options) {
    let area = 0;

    switch (shape) {
      case 'Triangle': // 魔术字符串
        area = 0.5 * options.width * options.height;
        break;
      default:
        break;
    }

    return area;
  }

  const area = getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
  console.log(area);
}
normalCoupled();

// 消除魔术字符串
function eliminateCouple() {
  const shapeType = {
    triangle: 'Triangle',
  };

  function getArea(shape, options) {
    let area = 0;

    switch (shape) {
      case shapeType.triangle: // 魔术字符串
        area = 0.5 * options.width * options.height;
        break;
      default:
        break;
    }

    return area;
  }

  const area = getArea(shapeType.triangle, { width: 100, height: 100 }); // 魔术字符串
  console.log(area);
}
eliminateCouple();

// with symbol
function withSymbol() {
  const shapeType = {
    triangle: Symbol('Triangle'),
  };

  function getArea(shape, options) {
    let area = 0;

    switch (shape) {
      case shapeType.triangle: // 魔术字符串
        area = 0.5 * options.width * options.height;
        break;
      default:
        break;
    }

    return area;
  }

  const area = getArea(shapeType.triangle, { width: 100, height: 100 }); // 魔术字符串
  console.log(area);
}
withSymbol();
