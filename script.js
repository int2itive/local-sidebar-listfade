var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  function getNodeindex(elm){ 
    var c = elm.parentNode.children, i = 0;
    for(; i < c.length; i++ )
        if( c[i] == elm ) return i;
  }

  // document.querySelector(".btn-prev").addEventListener("click", (e) => { 
    // e.preventDefault(); // don't follow the link
    let iter = 1;
    // var enumlists = $('ul.link-list > li');

    document.querySelectorAll("ul.link-list > li").forEach(li => { 
      let lcount = iter += 1; //this will not work after first loop
      //let disp = li.style.color; 
      //console.log(disp);
      if (li.classList.contains("showing")) {
        //iter = getNodeindex(li);
        //console.log(iter);
        //return;
      }

    })

    const btns = document.querySelectorAll('.container .dir-btn a');
    const links = document.querySelectorAll('.main-nav li');
    const ul = document.querySelectorAll('.top-level-list > li');
    const countSection = document.querySelector('.section-count');
    //console.log(links);

    countSection.querySelector('.item-num').innerText = "1";
    countSection.querySelector('.item-total').innerText = ul.length;

    function runOnClick (e) {
      e.preventDefault;
      const enumlists = document.querySelectorAll('.top-level-list > li');
      var iter = 3;
      var p;
      
      //[].forEach.call(enumlists, elem => {

      //enumlists.forEach(function(elem) {
      enumlists.forEach( elem => {        
        if (elem.classList.contains("showing")) {
          p = elem.parentElement;
          iter = [].indexOf.call(elem.parentElement.children, elem);
          //countSection.querySelector('.item-num').innerText = iter;
        } else {
          return;
        }
      });

      console.log(p.children[iter]);

      if (this.className.substring(4) === "prev") {
        var backLst = iter -= 1;
        myFunction(p.children[backLst]);
        countSection.querySelector('.item-num').innerText = backLst+1;
      } else {
        var frwLst = iter += 1; console.log(frwLst);
        myFunction(p.children[frwLst]);
        countSection.querySelector('.item-num').innerText = frwLst+1;
      }
        
    }

    function seekCategories (e) {
      e.preventDefault;
      let searchCat = e.target.innerText;
      let catfound = false;
      const catMatches = document.querySelectorAll('.top-level-list > li[data-subject-cat]');

      catMatches.forEach(cat => {
        var ff = cat.dataset.subjectCat;
        if(ff === searchCat) {
          //console.log('Match Found! for '+searchCat);
          myFunction(cat);
        }
      })
    }

    for (const btn of btns) {
      btn.addEventListener("click", runOnClick);
    }

    function myFunction(e) {
      var elems = document.querySelectorAll(".showing");
      [].forEach.call(elems, function(el) {
        el.classList.remove("showing");
      });
      e.classList.add("showing");
      iter = [].indexOf.call(e.parentElement.children, e);
      countSection.querySelector('.item-num').innerText = iter+1;
    }

    for (const link of links) {
      link.addEventListener("click", seekCategories);
    }

// });
  
});





