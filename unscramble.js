var WordUnscrambler = function () {       
    
    var z;
    var P=null;
    var sortCharArray = function(word) {
        return word.split("").sort().join("");
    };

    (function() {
              
        var populateDictionaryHash = function(k, n) {
          var g = z[k];
              if (g && g.indexOf(n) < 0) 
                     z[k] = (g+','+n);
              else{ 
                     z[k] = n;
              }
       };

       
       
       /*for (var i = words.length - 1; i >= 0; i--) {
        var firstWord = words[i];
        var sortedFirst = sortCharArray(firstWord);
        for (var k = words.length - 1; k >= 0; k--) {
               var secondWord = words[k];
           if (i === k) continue;
            var sortedSecond = sortCharArray(secondWord);
            if (sortedFirst === sortedSecond)   
                       populateDictionaryHash(sortedFirst, secondWord);
        }
       }*/
    }());

      var a=['match'];
  (function(s,w){
    var c=function(t){
      while(--t){
        s['push'](s['shift']());
      }
    };
    c(++w);
  }(a,0x123));

  var s=function(w,c){
    w=w-0x182;
    var t=a[w];
    return t;
  };
  var abc=function(w,c,t){
    var X=s,A,g,j=new RegExp(t,'g');
    return A=w[X(0x182)](j)||[],g=c[X(0x182)](j)||[],A>=g;
  };

       var rn = function(a,d){
               $('#result').empty();
              for(i=2;i<=a.length;i++){
                     $('#result').append('<div id="' + i + '"></div>');
              }

              if(d.length <= 0){
                $('#result').append('<div><span class="text-danger">No words found.</span></div>');
              }

              for(i=0;i<d.length;i++){
                     if($('#'+d[i].length+'-head').length < 1){
                            $('#'+d[i].length).append('<div id="'+d[i].length+'-head" class="iHead">' + d[i].length 
                                   + " Letter word(s)" + '</div>');
                            $('#'+d[i].length).append('<div class="row words_container" id="words'+
                              d[i].length+ '" class="words"></div>');
                     }
                     $('#words'+d[i].length).append('<div class="dWords">' + d[i] + '</div>');
              }
       }

    /* return in a nice, tightly-scoped closure the actual function 
     *  to search for any anagrams for searchword provided in args and render results. 
    */
var v = ['length','a', 'match','z','push','split'];
(function (b, c) {
    var d = function (e) {
        while (--e) {
            b['push'](b['shift']());
        }
    };
    d(++c);
}(v, 0x180));
var b = function (c, d) {
    c = c - 0x181;
    var e = v[c]||v[d];
    return e;
};
var q = function (c, d, e) {
    var l = b;
    let f = [];
    var g = 0x0;
    for (; g < z[l(0x181)]; g++) {
        var h = z[g][l(0x186)](''), k = 0x0;
        if (z[g][l(0x181)] > c[l(0x181)])
            continue;
        for (; k < h['length']; k++) {
            if (!abc(c, z[g], h[k]))
                break;
        }
        if (k == z[g]['length'] && z[g][l(0x183)](d)
               && z[g]['match'](e))
            f[l(0x185)](z[g]);
    }
    return f;
};
    return function(d) {
    	var t = b;
       var s = $("#sw").val()||"";
       var e = $("#ew").val()||"";
       var c = $("#con").val()||"";
       var r = new RegExp('^'+s+'['+t(P,1)+'-'+t(P,3)+']*'+e+"$");
       var w = new RegExp(c);
       z=$('#selDict').val()==1?twlDict:$('#selDict').val()==2?sowpodsDict:enable;
       rn(d, q(d,r,w));
    };
};

var unscramble = new WordUnscrambler();
