export default function(h,s,l) {
  let coreH = h || 0;
  let coreS = s || 0;
  let coreL = l || 0;

  this.getHSL = function() {
    return {
      h: coreH,
      s: coreS,
      l: coreL
    }
  }
}
